import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function StateView({ state }: { state?: "on" | "off" }) {
    const isOnline = state === "on"
    const isOffline = state === "off"

    const statusLabel = isOnline ? "Online" : isOffline ? "Offline" : "Unknown"
    const statusCopy = isOnline
        ? "Your server is reachable and responding."
        : isOffline
            ? "Server appears down or unreachable."
            : "Waiting for a server status update."

    return (
        <Card
            className={cn(
                "border bg-linear-to-br shadow-lg",
                isOnline && "border-emerald-500/25 from-emerald-500/10 via-background to-background shadow-emerald-900/10",
                isOffline && "border-rose-500/25 from-rose-500/10 via-background to-background shadow-rose-900/10",
                !isOnline && !isOffline && "border-border/70 from-muted/35 via-background to-background shadow-black/10"
            )}
        >
            <CardHeader className="space-y-2">
                <CardDescription className="text-[11px] tracking-[0.18em] uppercase">
                    Server State
                </CardDescription>
                <CardTitle className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
                    <span
                        className={cn(
                            "inline-flex h-3 w-3 rounded-full",
                            isOnline && "animate-pulse bg-emerald-500",
                            isOffline && "bg-rose-500",
                            !isOnline && !isOffline && "bg-muted-foreground/50"
                        )}
                    />
                    <span>{statusLabel}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">{statusCopy}</p>
            </CardContent>
        </Card>
    )
}