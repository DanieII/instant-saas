"use client";

import { forgotPasswordSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { forgotPassword } from "./actions";

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordForm) => {
    setError("");
    setSuccess(false);

    const response = await forgotPassword(data);
    if (response?.error) {
      setError(response.error);
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
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Reset Password
              </button>
              {error && <div className="text-error">{error}</div>}
            </form>
            {success && (
              <div className="text-center">
                A password reset link has been sent to your email.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
