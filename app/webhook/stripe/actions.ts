"use server";

import { stripe } from "@/lib/stripe";
import { User } from "@supabase/supabase-js";

export const createCheckoutSession = async (user: User, priceId: string) => {
  const { url } = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    metadata: {
      user_id: user.id,
    },
    customer_email: user.email,
    success_url: `${process.env.NEXT_PUBLIC_URL}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/#pricing`,
  });

  return url;
};
