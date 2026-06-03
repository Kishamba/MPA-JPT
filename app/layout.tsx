import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MPA Site Bible",
  description: "Interactive command center for MPA venue systems, risks, and timeline."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
