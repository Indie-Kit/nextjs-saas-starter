# Stripe Handler Reference

## Files
- `src/lib/stripe.ts`: Stripe instance initialization.
- `src/app/api/webhooks/stripe/route.ts`: Webhook handler entry point.

## Webhooks
- `checkout.session.completed`: Handle successful payments.
- `invoice.paid`: Handle recurring payments.
- `customer.subscription.*`: Handle subscription lifecycle.
