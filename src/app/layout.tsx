import "../styles/globals.css";
import { montserrat } from "@/app/ui/fonts";
import type { Metadata } from "next";
import { PhProvider } from "./providers";

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
      <PhProvider>
        <body className={montserrat.className}>{children}</body>
      </PhProvider>
    </html>
  );
}
