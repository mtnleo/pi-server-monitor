"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { StateView } from "@/components/ui/state_view";
import { TemperatureStats } from "@/components/ui/temperature_stats";
import { LatestBeat } from "@/components/ui/latest_beat";
import { PowerIcon } from "lucide-react";
import client from "@/api/client";

const Dashboard = () => {
    const router = useRouter();
    const [state, setState] = useState("on");
    const [lastTemperature, setLastTemperature] = useState(0);
    const [averageTemperature, setAverageTemperature] = useState(0);
    const [latestBeat, setLatestBeat] = useState(null);

    useEffect(() => {
        let active = true;

        const loadServerState = async () => {
            try {
                const res = await fetch("/api/server-state", { cache: "no-store" });
                const json = await res.json();

                if (active && json?.ok) {
                    setState(json.serverStatus ?? "off");
                    setLastTemperature(json.lastTemperature ?? 0);
                    setAverageTemperature(json.averageTemperature ?? 0);
                    setLatestBeat(json.latestBeat ?? null);
                }
            } catch (err) {
                console.error("Failed to load server state:", err);
            }
        };

        loadServerState();
        return () => {
            active = false;
        };
    }, []);

    const handleSignOut = async () => {
        await client.auth.signOut();
        router.replace('/');
    };

    return (
        <section className="mx-auto w-full max-w-3xl">
            <div className="rounded-2xl border border-border/70 bg-background/55 p-6 shadow-lg shadow-black/20 backdrop-blur sm:p-8">
                <div className="space-y-8">
                    <header className="space-y-2">
                        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">Overview</p>
                        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Dashboard</h1>
                        <p className="text-sm text-muted-foreground">You are signed in and ready to monitor your server.</p>
                    </header>

                    <div className="space-y-4">
                        <StateView state={state} />
                        <TemperatureStats lastTemperature={lastTemperature} averageTemperature={averageTemperature} />
                        <LatestBeat beatAt={latestBeat} />
                    </div>

                    <div className="flex justify-end border-t border-border/60 pt-6">
                        <Button
                            variant="destructive"
                            size="lg"
                            className="min-w-36 justify-center rounded-xl border border-destructive/25 bg-destructive/12 text-destructive shadow-sm shadow-destructive/10 hover:bg-destructive/20"
                            onClick={handleSignOut}
                        >
                            <PowerIcon data-icon="inline-start" className="size-4" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;