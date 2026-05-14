import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ArTeq Construction | Miami General Contractor',
  description: 'ArTeq Construction — licensed general contractor based in Miami, FL. New construction, remodeling, exterior envelope, windows, doors, and interior glass.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
