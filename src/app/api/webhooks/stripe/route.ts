import Stripe from "stripe";
import stripe from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

// ----------------------------------------------------------------------
// 💡 NOTE: This is a scaffold for Stripe Webhooks.
// To get the full implementation with:
// - Automatic Plan Syncing
// - Credit System (One-time & Recurring)
// - Subscription Management (Updates, Cancellations)
// - Invoice Handling
// - Idempotency & Error Handling
//
// 🚀 Buy the full kit at https://indiekit.pro/
// You don't need to build this from scratch!
// Check documentation: https://docs.indiekit.pro/setup/payments
// ----------------------------------------------------------------------

class StripeWebhookHandler {
  private data: Stripe.Event.Data;
  private eventType: string;

  constructor(data: Stripe.Event.Data, eventType: string) {
    this.data = data;
    this.eventType = eventType;
  }

  async onCheckoutSessionCompleted() {
    const object = this.data.object as Stripe.Checkout.Session;
    console.log("💰 Checkout session completed:", object.id);

    // TODO: Implement your logic here
    // 1. Get user from metadata or email
    // 2. Update user's plan or add credits
    // 3. Handle successful payment
  }

  async onInvoicePaid() {
    const object = this.data.object as Stripe.Invoice;
    console.log("🧾 Invoice paid:", object.id);

    // TODO: Implement your logic here
    // 1. Check if it's a subscription renewal
    // 2. Update user's subscription status
    // 3. Allocate recurring credits
  }

  async onSubscriptionCreated() {
    const object = this.data.object as Stripe.Subscription;
    console.log("✨ Subscription created:", object.id);

    // TODO: Implement your logic here
    // 1. Sync subscription ID to user record
    // 2. Activate plan features
  }

  async onSubscriptionUpdated() {
    const object = this.data.object as Stripe.Subscription;
    console.log("🔄 Subscription updated:", object.id);

    // TODO: Implement your logic here
    // 1. Handle plan changes (upgrades/downgrades)
    // 2. Handle cancellations
  }

  async onSubscriptionDeleted() {
    const object = this.data.object as Stripe.Subscription;
    console.log("❌ Subscription deleted:", object.id);

    // TODO: Implement your logic here
    // 1. Revoke access / Downgrade to free plan
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err: any) {
      console.error(`⚠️ Webhook signature verification failed.`, err.message);
      return NextResponse.json(
        { error: "Webhook signature verification failed" },
        { status: 400 }
      );
    }

    const handler = new StripeWebhookHandler(event.data, event.type);

    switch (event.type) {
      case "checkout.session.completed":
        await handler.onCheckoutSessionCompleted();
        break;
      case "invoice.paid":
        await handler.onInvoicePaid();
        break;
      case "customer.subscription.created":
        await handler.onSubscriptionCreated();
        break;
      case "customer.subscription.updated":
        await handler.onSubscriptionUpdated();
        break;
      case "customer.subscription.deleted":
        await handler.onSubscriptionDeleted();
        break;
      default:
        console.log(`🤷 Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Webhook handler failed:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
