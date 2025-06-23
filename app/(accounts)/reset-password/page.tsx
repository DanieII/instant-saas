"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { resetPasswordSchema } from "@/lib/schemas";

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

export default function ResetPassword() {
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordForm) => {
    setError("");

    const { error } = await supabase.auth.updateUser({
      password: data.password,
    });
    if (error) {
      setError(error.message);
    } else {
      router.push("/");
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
                Reset Password
              </button>
              {error && <div className="text-error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
