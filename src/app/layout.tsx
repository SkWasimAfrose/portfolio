import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CursorProvider from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sk Wasim Afrose (Shaan) | Full Stack Developer & UI/UX Designer",
    template: "%s | WorkWithWasim",
  },
  description: "Portfolio of Sk Wasim Afrose (Shaan), a Full Stack Developer and UI/UX Designer based in West Bengal, India. Specializing in Next.js, React, and premium web experiences for clients in Kolkata, Birbhum, Suri, Bolpur, and globally.",
  authors: [{ name: "Sk Wasim Afrose" }],
  creator: "Sk Wasim Afrose (Shaan)",
  keywords: [
    "workwithwasim",
    "full stack developer Shaan",
    "Sk Wasim Afrose",
    "Shaan developer",
    "Web Developer Kolkata",
    "Freelance Web Designer India",
    "Next.js Developer West Bengal",
    "UI/UX Designer Birbhum",
    "Website Developer Suri",
    "Software Engineer Bolpur",
    "React Developer",
    "Premium Portfolio",
    "Lead Generation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://workwithwasim.netlify.app",
    siteName: "WorkWithWasim",
    title: "Sk Wasim Afrose (Shaan) | Full Stack Developer & UI/UX Designer",
    description: "Premium portfolio of Sk Wasim Afrose, a passionate Full Stack Developer and UI/UX Designer.",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sk Wasim Afrose - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sk Wasim Afrose (Shaan) | Full Stack Developer & UI/UX Designer",
    description: "Premium portfolio of Sk Wasim Afrose, a passionate Full Stack Developer and UI/UX Designer.",
    images: ["/assets/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-text-main`}
      >
        <CursorProvider>
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
