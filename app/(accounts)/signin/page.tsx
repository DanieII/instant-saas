"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { z } from "zod";
import { signInSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithGoogle, signInWithPassword } from "./actions";
import Link from "next/link";

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

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

  const onSubmit = async (data: SignInFormData) => {
    setError("");

    const response = await signInWithPassword(data);
    if (response?.error) {
      setError(response.error);
    }
  };

  return (
    <div className="bg-base-200">
      <div className="container mx-auto flex min-h-screen px-8 py-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="bg-base-100 border-base-300 w-full max-w-lg space-y-4 rounded-xl border p-8">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="input w-full"
                id="email"
                {...register("email")}
                placeholder="Email"
                type="email"
                required
              />
              {errors.email && (
                <span className="text-error">{errors.email.message}</span>
              )}
              <input
                className="input w-full"
                id="password"
                {...register("password")}
                placeholder="Password"
                type="password"
                required
              />
              {errors.password && (
                <span className="text-error">{errors.password.message}</span>
              )}
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Sign In
              </button>
              {error && <div className="text-error">{error}</div>}
            </form>
            <div className="flex justify-center">
              <Link className="link" href="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <div className="divider uppercase">or</div>
            <div className="space-y-2">
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
            </div>
            <div className="flex justify-center">
              <Link className="link" href="/signup">
                Don&apos;t have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
