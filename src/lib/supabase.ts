import { createClient } from "@supabase/supabase-js";
import { nanoid } from "nanoid";
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

export async function UploadImage(file: File): Promise<string> {
  let fileName = "product/" + nanoid();
  const { error } = await supabase.storage
    .from("images")
    .upload(fileName, file);
  if (error) console.log(error);

  const { data } = supabase.storage.from("images").getPublicUrl(fileName);
  // console.log("URL=", data.publicUrl);
  const url = data.publicUrl;

  return url;
}
