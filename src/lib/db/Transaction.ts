import type { Product } from "@/types/ProductType";
import { supabase } from "../supabase";
import { findUser } from "./User";
import { getAllComponents } from "./Product";
import { dateNow } from "../date";

export async function SubmitBorrow(edr_users_id: string, products: Product[]) {
  await SubmitBorrowTools(
    edr_users_id,
    products.filter((product) => product.category == "EDRET")
  );
  await SubmitBorrowComponents(
    edr_users_id,
    products.filter((product) => product.category == "EDREC")
  );
}

export async function SubmitBorrowTools(
  edr_users_id: string,
  products: Product[]
) {
  const transactionData = [].concat(
    products.map((obj: Product) => {
      return {
        user_id: edr_users_id,
        tool_id: obj.id,
        status: false,
        created_at: dateNow(),
      };
    })
  );
  const result1 = await supabase
    .from("edr_transaction_tools")
    .insert(transactionData);
  if (result1.error) console.log(result1.error);

  const updataData = products.map((obj: Product) => {
    return {
      id: obj.id,
      quantity: 0,
    };
  });

  const result2 = await supabase.from("edr_product_tools").upsert(updataData);

  return result2.data;
}

export async function SubmitBorrowComponents(
  edr_users_id: string,
  products: Product[]
) {
  const transactionData = products.map((obj: Product) => {
    return {
      user_id: edr_users_id,
      comp_id: obj.id,
      status: false,
      created_at: dateNow(),
      quantity: obj.selectQuantity,
    };
  });

  const result1 = await supabase
    .from("edr_transaction_components")
    .insert(transactionData);

  if (result1.error) console.log(result1.error);

  const updataData = [].concat(
    products.map((obj: Product) => {
      return {
        id: obj.id,
        quantity: obj.quantity - obj.selectQuantity,
      };
    })
  );

  const result2 = await supabase
    .from("edr_product_components")
    .upsert(updataData);

  return result2.data;
}

// find User and Find transaction with user id
export async function searchTransactionByPhone(phone: string) {
  const user = await findUser(phone);

  const resultTools = await supabase
    .from("edr_transaction_tools")
    .select(
      `id,
      user_id,
      tool_id,
      status,
      edr_product_tools( id, name, image, quantity, category)
      `
    )
    .eq("user_id", user.id)
    .eq("status", false)
    .order("tool_id", { ascending: true });

  const resultComp = await supabase
    .from("edr_transaction_components")
    .select(
      `id,
            user_id,
            comp_id,
            status,
            quantity,
            edr_product_components( id, name, image, quantity, category)
            `
    )
    .eq("user_id", user.id)
    .eq("status", false)
    .order("comp_id", { ascending: true });

  return [resultTools.data, resultComp.data];
}

//get all Transaction to map in page
export async function getAllTransaction() {
  const resultTools = await supabase
    .from("edr_transaction_tools")
    .select(
      `id,
      user_id,
      tool_id,
      status,
      edr_users( id, name, phone),
      edr_product_tools( id, name, image, quantity, category)
      `
    )
    .eq("status", false)
    .order("id", { ascending: false });

  const resultComp = await supabase
    .from("edr_transaction_components")
    .select(
      `id,
      user_id,
      comp_id,
      status,
      quantity,
      edr_users( id, name, phone),
      edr_product_components( id, name, image, quantity, category)
      `
    )
    .eq("status", false)
    .order("id", { ascending: false });

  return [resultTools.data, resultComp.data];
}

export async function SubmitReturn(products: any[]) {
  await SubmitReturnTools(products.filter((item) => item.category == "EDRET"));
  await SubmitReturnComponents(
    products.filter((product) => product.category == "EDREC")
  );
}

export async function SubmitReturnTools(products: any[]) {
  const updataData1 = [].concat(
    products.map((item: any) => {
      return {
        id: item.id,
        status: true,
        return_at: dateNow(),
      };
    })
  );
  // Return quantity = 1
  const updataData2 = [].concat(
    products.map((item: any) => {
      return {
        id: item.itemId,
        quantity: 1,
      };
    })
  );
  const result1 = await supabase
    .from("edr_transaction_tools")
    .upsert(updataData1);

  const result2 = await supabase.from("edr_product_tools").upsert(updataData2);
}

export async function SubmitReturnComponents(products: any[]) {
  const updataData1 = [].concat(
    products.map((item: any) => {
      return {
        id: item.id,
        status: true,
        return_at: dateNow(),
      };
    })
  );

  const DataNow = await getAllComponents();
  const updataData2 = [].concat(
    products.map((item: any) => {
      return {
        id: item.itemId,
        quantity:
          DataNow.find((arr: Product) => arr.id == item.itemId).quantity +
          item.quantity,
      };
    })
  );
  const result1 = await supabase
    .from("edr_transaction_components")
    .upsert(updataData1);

  const result2 = await supabase
    .from("edr_product_components")
    .upsert(updataData2);
}
