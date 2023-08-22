import type { Product } from "@/types/ProductType";
import { supabase } from "../supabase";
import { findUser } from "./User";
import { getAllComponents } from "./Product";
import { dateNow } from "../date";

export async function SubmitBorrow(edr_users_id: string, products: Product[]) {
    try {
        await SubmitBorrowTools(
            edr_users_id,
            products.filter((product) => product.category == "EDRET")
        );
        await SubmitBorrowComponents(
            edr_users_id,
            products.filter((product) => product.category == "EDREC")
        );
    } catch (error) {
        console.log(error);
    }
}

export async function SubmitBorrowTools(
    edr_users_id: string,
    products: Product[]
) {
    try {
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
            
        if (result1.error) {
            throw result1.error;
        }

        const updataData = products.map((obj: Product) => {
            return {
                id: obj.id,
                quantity: 0,
            };
        });

        const result2 = await supabase
            .from("edr_product_tools")
            .upsert(updataData);

        if (result2.error) {
            throw result2.error;
        }

        return result2.data;
    } catch (error) {
        console.log(error);
    }
}

export async function SubmitBorrowComponents(
    edr_users_id: string,
    products: Product[]
) {
    try {
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

        if (result1.error) {
            throw result1.error;
        }

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

        if (result2.error) {
            throw result2.error;
        }

        return result2.data;
    } catch (error) {
        console.log(error);
    }
}

// find User and Find transaction with user id
export async function searchTransactionByPhone(phone: string) {
    try {
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

        if (resultTools.error) {
            throw resultTools.error;
        }

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

        if (resultComp.error) {
            throw resultComp.error;
        }

        return [resultTools.data, resultComp.data];
    } catch (error) {
        console.log(error);
    }
}

//get all Transaction to map in page
export async function getAllTransaction() {
    try {
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

        if (resultTools.error) {
            throw resultTools.error;
        }

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

        if (resultComp.error) {
            throw resultComp.error;
        }

        return [resultTools.data, resultComp.data];
    } catch (error) {
        console.log(error);
    }
}

export async function SubmitReturn(products: any[]) {
    try {
        await SubmitReturnTools(
            products.filter((item) => item.category == "EDRET")
        );
        await SubmitReturnComponents(
            products.filter((product) => product.category == "EDREC")
        );
    } catch (error) {
        console.log(error);
    }
}

export async function SubmitReturnTools(products: any[]) {
    try {
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

        if (result1.error) {
            throw result1.error;
        }

        const result2 = await supabase
            .from("edr_product_tools")
            .upsert(updataData2);

        if (result2.error) {
            throw result2.error;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function SubmitReturnComponents(products: any[]) {
    try {
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
                        DataNow.find((arr: Product) => arr.id == item.itemId)
                            .quantity + item.quantity,
                };
            })
        );
        const result1 = await supabase
            .from("edr_transaction_components")
            .upsert(updataData1);

        if (result1.error) {
            throw result1.error;
        }

        const result2 = await supabase
            .from("edr_product_components")
            .upsert(updataData2);

        if (result2.error) {
            throw result2.error;
        }
    } catch (error) {
        console.log(error);
    }
}
