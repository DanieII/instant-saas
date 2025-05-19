import InstantModal from "@/components/InstantModal";
import Navigation from "@/components/Navigation";
import { createClient } from "@/lib/supabase/server";
import { userHasAccess } from "@/lib/users";
import { redirect } from "next/navigation";

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
        <InstantModal />
      </div>
    </>
  );
}
