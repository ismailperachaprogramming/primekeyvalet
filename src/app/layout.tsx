import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrimeKey Valet",
  description: "Premium Valet Service You Can Trust",
  icons: {
    icon: "/primekey-logo.ico", // favicon
  },
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
