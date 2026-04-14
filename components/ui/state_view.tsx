import * as React from "react"


export function StateView({ state }: { state?: "on" | "off" }) {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-row justify-between items-center gap-4">
                <h2 className="text-lg font-semibold text-foreground">State</h2>
                <span className="ml-2inline-flex h-3 w-3 animate-pulse rounded-full bg-green-500" />
                <p className="text-md items-center">{ state }</p>
            </div>
        </div>
    );

};