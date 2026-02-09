import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Choose the plan that's right for you and start building today.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-12">
          {/* Starter Plan */}
          <div className="flex flex-col rounded-xl border bg-background p-6 shadow-xs">
            <div className="space-y-2">
              <h3 className="font-bold text-2xl">Starter</h3>
              <p className="text-muted-foreground">Everything you need to launch.</p>
            </div>
            <div className="mt-4 flex items-baseline text-5xl font-bold">
              Free
              <span className="ml-1 text-xl font-medium text-muted-foreground">/ forever</span>
            </div>
            <ul className="mt-6 space-y-3 flex-1">
              {[
                "Next.js 15 App Router",
                "Better Auth (Social + Magic Link)",
                "PostgreSQL + Drizzle ORM",
                "Stripe Subscription Webhooks",
                "File Uploads (UploadThing)",
                "Marketing UI (Landing, Blog, etc)",
                "Dashboard & User Settings",
                "Dark Mode Support"
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" variant="outline" asChild>
              <Link href="https://github.com/sharanjit-enterprise/nextjs-saas-starter">
                Clone Repository
              </Link>
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="relative flex flex-col rounded-xl border border-primary bg-background p-6 shadow-lg">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Save 200+ Hours
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-2xl">IndieKit Pro</h3>
              <p className="text-muted-foreground">Advanced features for scaling.</p>
            </div>
            <div className="mt-4 flex items-baseline text-5xl font-bold">
              $79
              <span className="ml-1 text-xl font-medium text-muted-foreground">/ one-time</span>
            </div>
            <ul className="mt-6 space-y-3 flex-1">
              {[
                "Everything in Starter",
                "Admin Dashboard & Analytics",
                "User Impersonation",
                "AI Integration Examples",
                "Credit System Implementation",
                "Advanced Billing Portal",
                "React Email Templates",
                "Documentation Site (MDX)",
                "Priority Support",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" asChild>
              <Link href="http://indiekit.pro/?utm_source=nextjs-saas-starter">
                Get Pro Access
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
