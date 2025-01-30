import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SWAPI Interface",
  description: "List of Star Wars movies in order",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
