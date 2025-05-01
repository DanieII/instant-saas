"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function signIn(formData: FormData) {
  const supabase = await createClient();

  const data = { email: formData.get("email") as string };

  const { error } = await supabase.auth.signInWithOtp({
    ...data,
    options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_URL}` },
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
}
