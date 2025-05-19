"use server";

import { instantSchema } from "@/lib/schemas";
import { createClient } from "@/lib/supabase/server";

export const instant = async (data: { field: string }) => {
  const validatedFields = instantSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: validatedFields.error.message };
  }

  const supabase = await createClient();

  return {};
};
