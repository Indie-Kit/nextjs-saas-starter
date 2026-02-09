import React from "react";
import { Header } from "@/components/layout/header";
import FooterSection from "@/components/layout/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-(--breakpoint-xl) px-2 sm:px-4 lg:px-6">
          {children}
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
