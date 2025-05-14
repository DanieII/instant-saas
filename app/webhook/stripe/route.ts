import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/admin";

const stripe = new Stripe(process.env.STRIPE_API_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const supabase = await createClient();
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  // Verify Stripe event
  try {
    event = stripe.webhooks.constructEvent(body, signature!, webhookSecret);
  } catch (error: any) {
    console.error("Webhook error occurred");
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  let data;

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        // Get session data
        data = event.data.object as Stripe.Checkout.Session;
        const session = await stripe.checkout.sessions.retrieve(data.id, {
          expand: ["line_items"],
        });

        // Grant access to the product
        const customerId = session.customer as string;
        const priceId = session.line_items?.data[0]?.price?.id as string;
        const userId = session?.metadata?.user_id as string;

        const { error } = await supabase
          .from("subscriptions")
          .upsert([
            {
              user_id: userId,
              customer_id: customerId,
              price_id: priceId,
            },
          ])
          .eq("user_id", userId);
        if (error) throw error;

        break;
      }

      case "customer.subscription.deleted": {
        // Get subscription data
        const data = event.data.object as Stripe.Subscription;
        const subscription = await stripe.subscriptions.retrieve(data.id);
        const subscriptionCustomerId = subscription.customer as string;

        // Revoke access to the product
        const { error } = await supabase
          .from("subscriptions")
          .delete()
          .eq("customer_id", subscriptionCustomerId);
        if (error) throw error;

        break;
      }
    }
  } catch (error: any) {
    console.error("Stripe webhook error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
