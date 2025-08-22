import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Pacifico, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AllPromo | Global IT & SEO Solutions with Crypto Payments",
  description: "Scale your business with AllPromo. We offer expert web development, international SEO, and automation services. Crypto-friendly agency for global startups and businesses.",
  keywords: "web development, SEO, digital marketing, crypto payments, Bitcoin, Ethereum, USDT, e-commerce, startup services, performance advertising, marketing automation, USA, UK, Australia, English-speaking markets",
  authors: [{ name: "AllPromo Team" }],
  creator: "AllPromo",
  publisher: "AllPromo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allpromo.space",
    title: "AllPromo | Global IT & SEO Solutions with Crypto Payments",
    description: "Scale your business with AllPromo. We offer expert web development, international SEO, and automation services. Crypto-friendly agency for global startups and businesses.",
    siteName: "AllPromo",
    images: [
      {
        url: "https://allpromo.space/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AllPromo - Global IT & SEO Solutions with Crypto Payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AllPromo | Global IT & SEO Solutions with Crypto Payments",
    description: "Scale your business with AllPromo. We offer expert web development, international SEO, and automation services. Crypto-friendly agency for global startups and businesses.",
    images: ["https://allpromo.space/og-image.jpg"],
    creator: "@AllPromo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // ✅ Canonical URL
  alternates: {
    canonical: "https://allpromo.space",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1f2937',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
