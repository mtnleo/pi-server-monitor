import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
    return (
        <Tabs defaultValue="login" className="w-full max-w-md gap-4">
            <div className="space-y-1.5 text-center">
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">Pi Server Monitor</h1>
                <p className="text-sm text-muted-foreground">Sign in to continue to your dashboard</p>
            </div>
            <TabsContent value="login">
                <Login />
            </TabsContent>
        </Tabs>
    )
}

export default Auth;