import { supabase } from "../supabase";

export async function findUser(tel: string) {
    try {
        const { data, error } = await supabase
            .from("edr_users")
            .select()
            .eq("phone", tel)
            .single();

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.log(error);
    }
}
export async function getAllUser() {
    try {
        const { data, error } = await supabase.from("edr_users").select();
        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function createUser(phone: string, name: string) {
    try {
        const { data, error } = await supabase
            .from("edr_users")
            .insert({ phone, name })
            .select()
            .single();

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(id: string, phone: string, name: string) {
    // Update userName by phone
    try {
        const { data, error } = await supabase
            .from("edr_users")
            .upsert({ id, name });

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function checkAndCreateUser(phone: string, name: string) {
    // if has user then update with new username
    try {
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
    } catch (error) {
        console.log(error);
    }
}
