import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to launch your SaaS?
          </h2>
          <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
            Start with our open-source kit or fast-track with the Pro version.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-base text-primary"
              asChild
            >
              <Link href="/sign-up">Start Building Free</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="http://indiekit.pro/?utm_source=nextjs-saas-starter">
                View Pro Kit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
