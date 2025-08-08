import ExampleForm from "@/components/ExampleForm";
import Navigation from "@/components/Navigation";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { userHasAccess } from "@/lib/users";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/signin");
  }

  const hasAccess = await userHasAccess(supabase, user.id);

  if (!hasAccess) {
    redirect("/#pricing");
  }

  return (
    <>
      <Navigation />
      <div className="container mx-auto p-8">
        <ExampleForm />
      </div>
    </>
  );
}
