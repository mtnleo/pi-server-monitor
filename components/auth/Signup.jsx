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

import client from "@/api/client";

const Signup = () => {

    const handleSignup = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        if(!email || !password) {
            toast.error("Email and password are required");
            return;
        }

        const { data, error } = await client.auth.signUp({
            email,
            password
        });

        if(data) {
            toast.success("Signup successful! Please check your email to confirm your account.");
        }   

        if(error) {
            toast.error(error.message);
        }
    };

    return <Card>
        <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>Enter email and password to sign up</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSignup} className="grid w-full items-center gap-4">
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="Enter your email" />
                </div>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required placeholder="Enter your password" />
                </div>
                <Button type="submit" className="w-full">Sign Up</Button>
            </form>
        </CardContent>
    </Card>

}

export default Signup;