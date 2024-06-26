import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Music App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}</Sidebar></body>
    </html>
  );
}
