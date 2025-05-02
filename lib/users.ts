import { SupabaseClient } from "@supabase/supabase-js";

export async function userHasAccess(supabase: SupabaseClient, userId: string) {
  const { data: subscription, error } = await supabase
    .from("subscriptions")
    .select()
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching subscription data:", error);
    return false;
  }

  return !!subscription;
}
