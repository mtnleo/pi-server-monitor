"use client";

import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import  Auth  from "@/components/auth/Auth"

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/dashboard");
    }
  }, [loading, user, router]);

  if (!loading && user) return null;

  return (
    <div className="flex min-h-screen flex-1 items-center justify-center px-4 py-10 sm:px-6">
      { loading ? (
        <h1 className="text-sm font-medium tracking-wide text-muted-foreground">Loading...</h1>
      ) : (
        <Auth />
      )}
    </div>
  );
}
