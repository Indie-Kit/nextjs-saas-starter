import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-xl">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Version 1.0 Released
          </div>
          
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Build your SaaS faster with{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              NextJS SaaS Starter
            </span>
          </h1>
          
          <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
            A comprehensive, production-ready starter kit. Stop wasting time on setup and start shipping features that matter.
          </p>

          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/sign-in">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="https://docs.indiekit.pro/deployment" target="_blank">
                Deploy Now
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border bg-muted/50 px-4 py-2 font-mono text-sm text-muted-foreground mt-4">
            <span className="mr-2">Start editing:</span>
            <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">
              src/app/(marketing)/page.tsx
            </code>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>Next.js 16</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>Better Auth</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>Stripe Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>Drizzle ORM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
