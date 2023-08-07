import { supabase } from "../supabase";

export async function findUser(tel: string) {
  const { data, error } = await supabase
    .from("edr_users")
    .select()
    .eq("phone", tel)
    .single();
  if (error) console.log(error);

  console.log(data);

  return data;
}

export async function createUser(phone: string, name: string) {
  const { data, error } = await supabase
    .from("edr_users")
    .insert({ phone, name })
    .select()
    .single();

    if (error) console.log(error);

  console.log(data);

  return data;
}

export async function checkandCreateUser(phone: string, name: string) {
  //
  const user = await findUser(phone);
  if (!user) {
    await createUser(phone, name);
    return await findUser(phone);
  }

  return user;
}
