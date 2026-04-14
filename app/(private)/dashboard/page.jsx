"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import client from "@/api/client";

const Dashboard = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        await client.auth.signOut();
        router.replace('/');
    };

    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
            <div className="rounded-2xl border border-border/70 bg-background/55 p-6 shadow-lg shadow-black/20 backdrop-blur">
                <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">Overview</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Dashboard</h1>
                <p className="mt-2 text-sm text-muted-foreground">You are signed in and ready to monitor your server.</p>
                <div className="mt-6">
                    <Button onClick={handleSignOut}>
                        Sign Out
                    </Button>
                </div>
            </div>
        </div>
    ) 
}

export default Dashboard;