"use client";

import CustomModal from "./CustomModal";
import { ExampleFormData } from "@/lib/types";
import { exampleAction } from "@/app/dashboard/actions";
import { exampleSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ExampleForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ExampleFormData>({
    resolver: zodResolver(exampleSchema),
  });

  async function onClose() {
    setIsOpen(false);
    reset();
    setError("");
  }

  async function onSubmit(data: ExampleFormData) {
    try {
      const response = await exampleAction(data);
      if (response.error) {
        setError(response.error);
      } else {
        onClose();
      }
    } catch {
      setError("An unexpected error occurred");
    }
  }

  return (
    <>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Example
      </button>
      <CustomModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Example Form"
        submit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        onClose={onClose}
      >
        <form className="space-y-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Field</legend>
            <input
              className="input input-bordered w-full"
              {...register("field")}
              required
              disabled={isSubmitting}
              autoFocus
            />
          </fieldset>
          {errors.field && (
            <div className="text-error">{errors.field.message}</div>
          )}

          {error && <div className="text-error">{error}</div>}
        </form>
      </CustomModal>
    </>
  );
}
