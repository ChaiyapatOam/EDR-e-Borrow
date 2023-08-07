import type { Product } from "@/types/ProductType";
import { supabase } from "../supabase";
import { findUser } from "./User";
import { getAllComponents } from "./Product";

export async function SubmitBorrow(edr_users_id: string, products: Product[]) {
    await SubmitBorrowTools(
      edr_users_id,
      products.filter((product) => product.category == "EDRT")
    );
  await SubmitBorrowComponents(
    edr_users_id,
    products.filter((product) => product.category == "EDRC")
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
      };
    })
  );
  const result1 = await supabase
    .from("edr_transaction_tools")
    .insert(transactionData);

  if (result1.error) console.log(result1.error);

  const updataData = [].concat(
    products.map((obj: Product) => {
      return {
        id: obj.id,
        quantity: 0,
      };
    })
  );

  const result2 = await supabase.from("edr_product_tools").upsert(updataData);

  return result2.data;
}

export async function SubmitBorrowComponents(
  edr_users_id: string,
  products: Product[]
) {
  const transactionData = [].concat(
    products.map((obj: Product) => {
      return {
        user_id: edr_users_id,
        comp_id: obj.id,
        status: false,
      };
    })
  );
  const DataNow = await getAllComponents();
  const result1 = await supabase
    .from("edr_transaction_components")
    .insert(transactionData);

  if (result1.error) console.log(result1.error);

  const updataData = [].concat(
    products.map((obj: Product) => {

      return {
        id: obj.id,
        quantity:
          DataNow.find((arr: Product) => arr.id == obj.id).quantity - obj.quantity,
      };
    })
  );

  const result2 = await supabase
    .from("edr_product_components")
    .upsert(updataData);

  return result2.data;
}
