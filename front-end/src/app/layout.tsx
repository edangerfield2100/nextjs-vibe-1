import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ted's Pizzeria - Groovy 70s Style",
  description: "The most far-out pizzeria in town!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
