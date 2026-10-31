import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "SeaFlint | Data-driven hull-cleaning decisions",
  description:
    "Explore SeaFlint's vessel-performance research and hull-cleaning decision support. Discuss industry applications, research collaboration, data partnerships or testing.",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
