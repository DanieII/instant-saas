"use server";

import { createClient } from "@/lib/supabase/server";

export async function forgotPassword(data: { email: string }) {
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_URL}/reset-password`,
  });

  if (error) {
    return { error: error.message };
  }
}
