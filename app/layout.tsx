"use client";
import "./globals.css";
import { Roboto } from "next/font/google";


import { AuthProvider} from "@/components/context/AuthProvider";
import { Toaster } from "sonner";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${roboto.variable} dark`}>
      <body className={`${roboto.className} app-shell min-h-screen flex flex-col antialiased`}>
        <AuthProvider>
          <main className="flex min-h-screen flex-1 flex-col">{children}</main>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
