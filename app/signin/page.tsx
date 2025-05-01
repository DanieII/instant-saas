import { createClient } from "@/lib/supabase/server";
import { signIn } from "./actions";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    redirect("/");
  }

  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-8 py-4">
        <div className="flex h-screen items-center justify-center">
          <div className="bg-base-100 border-base-300 w-full max-w-lg space-y-4 rounded-lg border p-8">
            <form className="flex flex-col gap-4">
              <input
                className="input w-full"
                id="email"
                name="email"
                placeholder="name@example.com"
                type="email"
                required
              />
              <button className="btn btn-primary btn-block" formAction={signIn}>
                Sign in with email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
