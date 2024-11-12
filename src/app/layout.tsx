import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ETIB",
  description: "Site vitrine pour le projet de fin d'étude ETIB",
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
