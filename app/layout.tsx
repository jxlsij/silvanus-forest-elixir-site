import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amiasayedau-silvanus.hf.space"),
  title: "SILVANUS | Forest Elixir",
  description: "A cinematic fragrance landing page for SILVANUS Forest Elixir Eau de Parfum.",
  applicationName: "SILVANUS Forest Elixir",
  authors: [{ name: "SILVANUS Parfums" }],
  creator: "SILVANUS Parfums",
  openGraph: {
    title: "SILVANUS | Forest Elixir",
    description: "A scroll-linked fragrance film for SILVANUS Forest Elixir Eau de Parfum.",
    url: "https://amiasayedau-silvanus.hf.space",
    siteName: "SILVANUS Forest Elixir",
    images: [
      {
        url: "/sequence/frame_0.jpg",
        width: 1920,
        height: 1040,
        alt: "SILVANUS Forest Elixir bottle in smoke and pine"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SILVANUS | Forest Elixir",
    description: "A scroll-linked fragrance film for SILVANUS Forest Elixir Eau de Parfum.",
    images: ["/sequence/frame_0.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceGrotesk.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
