"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
            <Providers>
              {children}
            </Providers>
        </body>
      </html>
    </QueryClientProvider>
  );
}
