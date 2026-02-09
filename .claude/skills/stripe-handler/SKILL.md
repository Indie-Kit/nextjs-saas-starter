---
name: stripe-handler
description: Handle Stripe payments, webhooks, and subscriptions.
tools: Read, Write, Edit
model: inherit
---

# Stripe Handler

## Instructions
- Use `src/lib/stripe.ts` for Stripe instance.
- Webhooks are handled in `src/app/api/webhooks/stripe/route.ts` (Scaffold provided).
- Implement your logic in the `StripeWebhookHandler` class in the route file.
- Use `stripe` CLI for testing webhooks locally.
