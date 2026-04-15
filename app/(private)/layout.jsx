"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// hooks
import useAuth from "@/hooks/useAuth";

const PrivatePagesLayout = ({children}) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(!loading && !user) {
            router.replace('/');
        }
    }, [user, loading, router]);

    if (loading || !user) return null;

    return (
        <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-8 sm:py-10 lg:py-12">
            <div className="w-full rounded-3xl border border-border/70 bg-card/55 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10">
                {children}
            </div>
        </main>
    )
}

export default PrivatePagesLayout;