import CallToAction from "@/components/call-to-action";
import FAQs from "@/components/faqs";
import Features from "@/components/features-4";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import StatsSection from "@/components/stats";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <Features />
      <StatsSection />
      <Pricing />
      <FAQs />
      <CallToAction />
    </main>
  );
}
