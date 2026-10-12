import { Barlow_Condensed, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

// Self-hosted at build time by next/font. `latin-ext` carries the Bosnian
// diacritics (ć č š ž đ). Exposed as CSS variables and mapped to the
// Tailwind font-display / font-sans / font-mono tokens in globals.css.
// next/font preloads every file it declares, so only the faces the landing and splash
// render are loaded: Barlow Condensed 600 (headings), IBM Plex Sans 400–700 (body) and
// IBM Plex Mono 400 (eyebrows, meta).

export const barlowCondensed = Barlow_Condensed({
  weight: "600",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

// Variable font: one file per subset covers 400, 500, 600 and 700, so no weight list.
export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});
