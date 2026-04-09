"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import  Auth  from "@/components/auth/Auth"

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if(!loading && user) {
    router.push("/dashboard");
    return null
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      { loading ? <h1>Loading...</h1> : <Auth />}
    </div>
  );
}
