import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import { Container, Theme } from "@radix-ui/themes";

import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import NavBar from "./NavBar";
import { Suspense } from "react";
import AuthProvider from "./auth/Provider";
import Script from "next/script";
import LayoutScript from "@/layoutScript";
import { SessionProvider } from "next-auth/react";
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({
  subsets: ["latin"],
  //weight: ["100", "100"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "100"],
  variable: "--font-roboto",
});

const poppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AI Rank",
  description: "Created by Huabin Hou",
  openGraph: {
    title: "",
    description: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //<html lang="en" data-theme="dark"></html>
    <html lang="en">
      <LayoutScript />

      {
        //< className={poppins.className}>
      }
      <body className={GeistSans.variable}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme accentColor="gray" radius="small">
              <NavBar />
              <main className="p-4">
                <Container>{children}</Container>
              </main>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
