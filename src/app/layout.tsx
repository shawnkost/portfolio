import "../styles/globals.css";
import { montserrat } from "@/app/ui/fonts";
import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import { PHProvider } from "./providers";

export const metadata: Metadata = {
  title: "Shawn Kost - My Portfolio",
  description:
    "My name is Shawn Kost, and I am a front-end developer. Since a young age I have had a love for anything that involves computers and technology. I began with...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PHProvider>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="fcefbfa2-de35-4c1c-8247-d8cd31747fd6"
          strategy="lazyOnload"
        />
        <body className={montserrat.className}>{children}</body>
      </PHProvider>
    </html>
  );
}
