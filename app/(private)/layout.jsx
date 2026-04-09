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

    return <>{children}</>
}

export default PrivatePagesLayout;