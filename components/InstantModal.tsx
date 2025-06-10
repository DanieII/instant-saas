"use client";

import { instant } from "@/app/dashboard/actions";
import { instantSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomModal from "./CustomModal";

type InstantForm = z.infer<typeof instantSchema>;

export default function InstantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InstantForm>({
    resolver: zodResolver(instantSchema),
  });

  async function onSubmit(data: InstantForm) {
    setError("");

    try {
      const response = await instant(data);
      if (response.error) {
        setError(response.error);
      } else {
        setIsOpen(false);
        reset();
      }
    } catch {
      setError("Failed");
    }
  }

  return (
    <>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Instant
      </button>
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            className="input input-bordered w-full"
            {...register("field")}
            placeholder="Field"
            required
            disabled={isSubmitting}
          />
          {errors.field && (
            <div className="text-error">{errors.field.message}</div>
          )}
          {error && <div className="text-error">{error}</div>}
          <button
            className="btn btn-primary w-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </CustomModal>
    </>
  );
}
