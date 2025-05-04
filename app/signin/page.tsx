"use client";

import { useEffect, useState } from "react";
import { signIn } from "./actions";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignInPage() {
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const redirectSignedInUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        router.replace("/");
      }
    };

    redirectSignedInUser();
  }, [router, supabase]);

  async function handleSignIn(formData: FormData) {
    await signIn(formData);
    setIsSent(true);
  }

  return (
    <div className="bg-base-200">
      <div className="container mx-auto flex min-h-screen px-8 py-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="bg-base-100 border-base-300 w-full max-w-lg space-y-4 rounded-lg border p-8">
            {isSent ? (
              <p className="text-center font-bold">
                Check your email for the magic link
              </p>
            ) : (
              <form className="flex flex-col gap-4">
                <input
                  className="input w-full"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  type="email"
                  required
                />
                <button
                  className="btn btn-primary btn-block"
                  formAction={handleSignIn}
                >
                  Sign in with email
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
