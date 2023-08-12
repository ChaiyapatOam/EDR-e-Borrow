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
            quantity: obj.quantity,
        };
    });
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
                    DataNow.find((arr: Product) => arr.id == obj.id).quantity -
                    obj.quantity,
            };
        })
    );

    const result2 = await supabase
        .from("edr_product_components")
        .upsert(updataData);

    return result2.data;
}

// find User and Find transaction with user id
export async function getTransaction(phone: string) {
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

export async function SubmitReturn(edr_users_id: string, products: any[]) {
    await SubmitReturnTools(products.filter((item) => item.category == "EDRT"));
    await SubmitReturnComponents(
        products.filter((product) => product.category == "EDRC")
    );
}

export async function SubmitReturnTools(products: any[]) {
    const updataData1 = [].concat(
        products.map((item: any) => {
            return {
                id: item.id,
                status: true,
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

    const result2 = await supabase
        .from("edr_product_tools")
        .upsert(updataData2);
}

export async function SubmitReturnComponents(products: any[]) {
    const updataData1 = [].concat(
        products.map((item: any) => {
            return {
                id: item.id,
                status: true,
            };
        })
    );

    const DataNow = await getAllComponents();
    const updataData2 = [].concat(
        products.map((item: any) => {
            return {
                id: item.itemId,
                quantity:
                    DataNow.find((arr: Product) => arr.id == item.itemId)
                        .quantity + item.quantity,
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
