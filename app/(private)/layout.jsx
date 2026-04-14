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
        <div className="mx-auto flex min-h-screen w-full max-w-6xl px-4 py-6 sm:px-8 sm:py-10">
            <div className="w-full rounded-3xl border border-border/70 bg-card/55 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
                {children}
            </div>
        </div>
    )
}

export default PrivatePagesLayout;