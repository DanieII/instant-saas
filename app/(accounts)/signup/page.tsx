"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpWithPassword } from "./actions";
import { useEffect, useState } from "react";
import { signUpSchema } from "@/lib/schemas";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

type SignUpForm = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
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

  const onSubmit = async (data: SignUpForm) => {
    setError("");
    setSuccess(false);

    const result = await signUpWithPassword(data);
    if (result?.error) {
      setError(result.error);
    } else {
      setSuccess(true);
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
              noValidate
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
                Sign up
              </button>
              {error && <div className="text-error">{error}</div>}
            </form>
            {success && (
              <div className="text-center">
                Please check your email to verify your account.
              </div>
            )}
            <div className="flex justify-center">
              <Link className="link" href="/signin">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
