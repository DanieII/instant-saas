"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signInWithEmail(formData: FormData) {
  const supabase = await createClient();

  const data = { email: formData.get("email") as string };

  const { error } = await supabase.auth.signInWithOtp({
    ...data,
    options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_URL}` },
  });

  if (error) {
    return redirect("/");
  }

  revalidatePath("/", "layout");
}

export async function signInWithGoogle() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: `${process.env.NEXT_PUBLIC_URL}` },
  });

  if (error) {
    return redirect("/");
  }

  return redirect(data.url);
}
