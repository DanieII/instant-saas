"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signInSchema } from "@/lib/schemas";

export async function signInWithPassword(data: {
  email: string;
  password: string;
}) {
  const parsedData = signInSchema.safeParse(data);
  if (!parsedData.success) {
    return { error: parsedData.error.message };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");

  redirect("/");
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

// Use this action when implementing magic links
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
