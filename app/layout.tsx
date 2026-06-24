import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vwebit.xyz"),
  title: {
    default: "Vwebit — Websites & SEO for Indian Small Businesses",
    template: "%s | Vwebit",
  },
  description:
    "Vwebit helps Indian SMEs get more leads with professional websites, local SEO, Google Business Profile optimization, and business automation. Starting from ₹7,999.",
  keywords: [
    "website development for small business India",
    "local SEO services India",
    "Google Business Profile optimization India",
    "website design Jalandhar",
    "small business website India",
  ],
  authors: [{ name: "Vwebit", url: "https://www.vwebit.xyz" }],
  creator: "Vwebit",
  publisher: "Vwebit",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vwebit.xyz",
    siteName: "Vwebit",
    title: "Vwebit — Websites & SEO for Indian Small Businesses",
    description:
      "Professional websites, local SEO, and Google Business Profile optimization for Indian SMEs. Starting from ₹7,999.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vwebit — Websites & SEO for Indian Small Businesses",
    description:
      "Professional websites, local SEO, and Google Business Profile optimization for Indian SMEs.",
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
  alternates: {
    canonical: "https://www.vwebit.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W6QS2DLC');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6QS2DLC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
