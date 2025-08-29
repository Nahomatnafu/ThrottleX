import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThrottleX - Jet Ski Rentals",
  description: "Experience the thrill of Miami waters with premium jet ski rentals, boat rentals, and water adventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
