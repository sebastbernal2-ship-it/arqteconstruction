import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArTeq Construction | Miami, FL",
  description: "Professional construction services in Miami, FL. New construction, remodeling, exterior envelope, windows, doors, railings, and interior glass.",
  keywords: "construction, Miami, remodeling, new construction, exterior envelope, windows, doors, railings, interior glass",
  openGraph: {
    title: "ArTeq Construction",
    description: "Precision-built. Miami-proven.",
    type: "website",
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
