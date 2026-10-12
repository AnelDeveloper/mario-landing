import type { Metadata, Viewport } from "next";
import { APP_ORIGIN, SITE_URL } from "@/lib/site";
import { barlowCondensed, ibmPlexMono, ibmPlexSans } from "./fonts";
import "./globals.css";

const title = "Mandarić Method — Znanje koje kuhinju pretvara u sistem.";
const description =
  "Programi, alati i iskustva za hospitality profesionalce. Standard bez kompromisa.";

// Share image: app/opengraph-image.jpg (+ .alt.txt), a 1200×630 JPEG of the hero photo.
// Next.js adds og:image with its size and type, and twitter:image inherits it.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "bs_BA",
    siteName: "Mandarić Method",
    url: "/",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#111820",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bs"
      className={`${barlowCondensed.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        {/* Warm up the connection to the product app opened by every app link. */}
        <link rel="preconnect" href={APP_ORIGIN} />
      </head>
      <body>{children}</body>
    </html>
  );
}
