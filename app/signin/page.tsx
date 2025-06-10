"use client";

import { useEffect, useState } from "react";
import { signInWithEmail, signInWithGoogle } from "./actions";
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

  async function handleSignInWithEmail(formData: FormData) {
    await signInWithEmail(formData);
    setIsSent(true);
  }

  return (
    <div className="bg-base-200">
      <div className="container mx-auto flex min-h-screen px-8 py-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="bg-base-100 border-base-300 w-full max-w-lg space-y-4 rounded-xl border p-8">
            {isSent ? (
              <p className="text-center font-bold">
                Check your email for the magic link
              </p>
            ) : (
              <div>
                <button
                  className="btn btn-block border-[#e5e5e5] bg-white text-black"
                  onClick={() => signInWithGoogle()}
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Sign in with Google
                </button>
                <div className="divider">OR</div>
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
                    className="btn btn-primary"
                    formAction={handleSignInWithEmail}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[1.2em]"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    Sign in with email
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
