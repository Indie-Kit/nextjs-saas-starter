import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  Database,
  CreditCard,
  Layout,
  CloudUpload,
} from "lucide-react";

const features = [
  {
    name: "Next.js 16 & Tailwind CSS",
    description:
      "Built on the cutting edge with Next.js 16 App Router and Tailwind CSS v4 for ultimate performance and developer experience.",
    icon: Layout,
  },
  {
    name: "Better Auth",
    description:
      "Secure user management with Better Auth. Magic links, social login, and more out of the box.",
    icon: Shield,
  },
  {
    name: "Shadcn UI",
    description:
      "Beautiful, accessible components built with Radix UI and Tailwind CSS. Fully customizable and copy-paste ready.",
    icon: Smartphone,
  },
  {
    name: "Drizzle ORM & PostgreSQL",
    description:
      "Type-safe database interactions with Drizzle ORM. Schema management made easy with automatic migrations.",
    icon: Database,
  },
  {
    name: "Stripe Payments",
    description:
      "Seamless integration with Stripe for subscriptions and one-time payments. Webhook handling included.",
    icon: CreditCard,
  },
  {
    name: "UploadThing",
    description:
      "Drag-and-drop file uploads with UploadThing. Optimized for performance and ease of use.",
    icon: CloudUpload,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything you need to ship
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We've handled the boring stuff so you can focus on building your unique value proposition.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
