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
        <div>
            <div>Dashboard</div>
            <Button onClick={handleSignOut}>
                Sign Out
            </Button>
        </div>
    ) 
}

export default Dashboard;