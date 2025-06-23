"use server";

import { createClient } from "@/lib/supabase/server";

export async function signUpWithPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    ...data,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
    },
  });

  if (error) {
    return { error: error.message };
  }
}
