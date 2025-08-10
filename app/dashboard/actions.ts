"use server";

import { ExampleFormData } from "@/lib/types";
import { exampleSchema } from "@/lib/schemas";
import { createClient } from "@/lib/supabase/server";

export const exampleAction = async (data: ExampleFormData) => {
  const validatedFields = exampleSchema.safeParse(data);
  if (!validatedFields.success) {
    return { error: validatedFields.error.message };
  }

  const supabase = await createClient();

  return {};
};
