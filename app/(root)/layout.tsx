import type { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Snack Catalog",
  description: "A Snack Catalog",
  generator: "nata.nael",
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
