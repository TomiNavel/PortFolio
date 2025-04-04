import type { JSX, ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import CookiesBanner from "@/components/CookiesBanner";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TomiNavel",
  description: "Software Portfolio",
  icons: "/faviconNavel.ico",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          defer
          data-website-id="e67bea86-3428-4ef4-a4d1-5b35a0bacc57"
          src="https://stats.tominavel.com/umami.js"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <CookiesBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
