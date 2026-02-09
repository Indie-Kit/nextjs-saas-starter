"use client";

import FooterSection from "@/components/layout/footer";
import { AppHeader } from "@/components/layout/app-header";
import React, { useEffect } from "react";
import useUser from "@/lib/users/useUser";
import { useRouter } from "next/navigation";

function DashboardSkeleton() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header Shimmer */}
      <div className="border-b border-border/40 bg-background">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse" />
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      <div className="grow p-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="h-8 w-64 bg-gray-200 rounded-md animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading, isError } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (isError || !user)) {
      router.push("/sign-in");
    }
  }, [user, isLoading, isError, router]);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (!user) {
    return null; // Will redirect
  }

  return (
    <div className="flex flex-col min-h-screen gap-4">
      <AppHeader />
      <div className="grow p-4 sm:p-2 max-w-(--breakpoint-xl) mx-auto w-full">{children}</div>
      <FooterSection />
    </div>
  );
}

export default AppLayout;
