import type { Product } from "@/types/ProductType";
import { supabase } from "../supabase";

const dbName = {
  EDRC: "edr_product_components",
  EDRT: "edr_product_tools",
};

export const getAllProduct = async () => {
  // const { data, error } = await supabase.from("edr_all_product").select();
  const components = await getAllComponents();
  const tools = await getAllTools();
  const data = components.concat(tools);
  // console.log(data);

  return data;
};

export const getAllComponents = async () => {
  const { data, error } = await supabase
    .from("edr_product_components")
    .select()
    .order("id");

  if (error) console.log(error);

  return data;
};

export const getAllTools = async () => {
  const { data, error } = await supabase
    .from("edr_product_tools")
    .select()
    .order("id");

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

export const findProduct = async (name: string, dbName: string) => {
  const { data } = await supabase
    .from(dbName)
    .select()
    .eq("name", name)
    .single();

  return data;
};

export const createProduct = async (product: Omit<Product, "id">) => {
  // console.log(product);

  const { data, error } = await supabase
    .from(dbName[product.category])
    .insert(product);

  if (error) console.log(error);

  return data;
};
