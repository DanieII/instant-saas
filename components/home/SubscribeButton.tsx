"use client";

import { createCheckoutSession } from "@/app/webhook/stripe/actions";
import { useClientUser } from "@/hooks/useClientUser";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type SubscribeButtonProps = {
  priceId: string;
};

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { user } = useClientUser();

  const handleSubscribe = async () => {
    if (!user) {
      router.push("/signin");
    } else {
      startTransition(async () => {
        const url = await createCheckoutSession(user, priceId);

        if (url) {
          router.push(url);
        } else {
          console.error("Error creating subscription session");
        }
      });
    }
  };

  return (
    <button
      disabled={isPending}
      className="btn btn-primary btn-block"
      onClick={() => handleSubscribe()}
    >
      {isPending ? (
        <span className="loading loading-spinner"></span>
      ) : (
        "Subscribe"
      )}
    </button>
  );
}
