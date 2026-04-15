import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner"
import { LogInIcon } from "lucide-react";

import client from "@/api/client";

const Login = () => {

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        if(!email || !password) {
            toast.error("Email and password are required");
            return;
        }

        const { data, error } = await client.auth.signInWithPassword({
            email,
            password
        });

        if(data) {
            toast.success("Login successful!");
        }   

        if(error) {
            toast.error('Unable to log in', error.message);
        }
    };

    return <Card className="overflow-hidden rounded-2xl border border-border/70 bg-background/55 shadow-lg shadow-black/20 backdrop-blur">
        <CardHeader className="space-y-2 border-b border-border/60 pb-5">
            <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">Authentication</p>
            <CardTitle className="text-2xl tracking-tight">Log In</CardTitle>
            <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="pt-5">
            <form onSubmit={handleLogin} className="grid w-full items-center gap-5">
                <div className="grid w-full items-center gap-2">
                    <Label className="text-xs font-medium tracking-wide text-muted-foreground uppercase" htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="h-10 rounded-xl border-border/70 bg-background/70 px-3 shadow-inner shadow-black/5"
                    />
                </div>
                <div className="grid w-full items-center gap-2">
                    <Label className="text-xs font-medium tracking-wide text-muted-foreground uppercase" htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        required
                        placeholder="Enter your password"
                        className="h-10 rounded-xl border-border/70 bg-background/70 px-3 shadow-inner shadow-black/5"
                    />
                </div>
                <Button
                    type="submit"
                    size="lg"
                    className="mt-2 h-10 w-full rounded-xl border border-foreground/10 bg-foreground text-background shadow-md shadow-black/20 hover:bg-foreground/90"
                >
                    <LogInIcon data-icon="inline-start" className="size-4" />
                    Log In
                </Button>
            </form>
        </CardContent>
    </Card>

}

export default Login;