import type { Product } from "@/types/ProductType";
import { supabase } from "../supabase";

export const getAllProduct = async () => {
  const { data, error } = await supabase.from("Product").select();
  console.log(data);

  if (error) console.log(error);

  return data;
};

export const getAllProductByCategory = async (category: string) => {
  const { data, error } = await supabase
    .from("Product")
    .select()
    .eq("category", category);
  if (error) console.log(error);

  return data;
};

export const createProduct = async (product: Omit<Product, "id">) => {
  const { data, error } = await supabase.from("Product").insert(product);
  if (error) console.log(error);

  return data;
};
