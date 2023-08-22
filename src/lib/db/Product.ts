import type { Product } from "@/types/ProductType";
import { supabase } from "../supabase";

const dbName = {
    EDREC: "edr_product_components",
    EDRET: "edr_product_tools",
};

export const getAllProduct = async () => {
    try {
        const components = await getAllComponents();
        const tools = await getAllTools();
        const data = components.concat(tools);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllComponents = async () => {
    try {
        const { data, error } = await supabase
            .from("edr_product_components")
            .select()
            .order("id");

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllTools = async () => {
    try {
        const { data, error } = await supabase
            .from("edr_product_tools")
            .select()
            .order("id");

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllProductByCategory = async (category: string) => {
    try {
        const { data, error } = await supabase
            .from("Product")
            .select()
            .eq("category", category);

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const findProduct = async (name: string, dbName: string) => {
    try {
        const { data, error } = await supabase
            .from(dbName)
            .select()
            .eq("name", name)
            .single();

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const createProduct = async (product: Omit<Product, "id">) => {
    try {
        const { data, error } = await supabase
            .from(dbName[product.category])
            .insert(product);

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const editProduct = async (
    id: number,
    name: string,
    category: string,
    image: string,
    quantity: number
) => {
    try {
        const result = await supabase
            .from(dbName[category])
            .upsert({ id: id, name: name, image: image, quantity: quantity });

        if (result.error) {
            throw result.error;
        }
    } catch (error) {
        console.log(error);
    }
};
