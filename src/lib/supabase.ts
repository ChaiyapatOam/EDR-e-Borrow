import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const Search = async (value: string) => {
  const { data, error } = await supabase
    .from("Product")
    .select()
    .eq("name", value);
  if (error) console.log(error);

  return data;
};

export const getAllProduct = async () => {
  const { data, error } = await supabase.from("Product").select();
  if (error) console.log(error);

  return data;
};

export const getAllProductByCategory = async (category: string) => {
  const { data, error } = await supabase.from("Product").select().eq("category",category);
  if (error) console.log(error);

  return data;
};

export const createProduct = async (category: string) => {
  const { data, error } = await supabase.from("Product").insert({});
  if (error) console.log(error);

  return data;
};

export async function UploadImage( file: File) {
    let fileName = "product/" + encodeURIComponent(file.name) + Date.now().toString();
    const { error } = await supabase.storage
      .from("images")
      .upload(fileName, file);
    if (error) console.log(error);
  
    const { data } = supabase.storage.from("images").getPublicUrl(fileName);
    // console.log("URL=", data.publicUrl);
    const image = {
      name: fileName,
      url: data.publicUrl,
    };
    return image;
  }
