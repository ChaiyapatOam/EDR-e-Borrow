import { supabase } from "../supabase";

export async function findUser(tel: string) {
  const { data, error } = await supabase
    .from("edr_users")
    .select()
    .eq("phone", tel)
    .single();
  if (error) console.log(error);

  // console.log(data);

  return data;
}
export async function getAllUser() {
  const { data, error } = await supabase.from("edr_users").select();
  if (error) console.log(error);

  // console.log(data);

  return data;
}

export async function createUser(phone: string, name: string) {
  const { data, error } = await supabase
    .from("edr_users")
    .insert({ phone, name })
    .select()
    .single();

  if (error) console.log(error);

  // console.log(data);

  return data;
}

export async function updateUser(id: string, phone: string, name: string) {
  // Update userName by phone
  const { data, error } = await supabase.from("edr_users").upsert({ id, name });

  if (error) console.log(error);

  return data;
}

export async function checkAndCreateUser(phone: string, name: string) {
  // if has user then update with new username
  const user = await findUser(phone);

  if (user) {
    await updateUser(user.id, user.phone, name);
  }

  // if no user create the new user
  if (!user) {
    await createUser(phone, name);
    return await findUser(phone);
  }

  return user;
}
