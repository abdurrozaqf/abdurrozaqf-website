import { Inter, Playfair_Display } from "next/font/google";
import { Metadata } from "next";

import "@/styles/circular-transition.css";
import "@/styles/globals.css";

import AppProviders from "@/providers/app-providers";
import { METADATA } from "@/lib/constants/metadata";
import Layouts from "@/components/layouts";
import { cn } from "@/lib/utils";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_DOMAIN || ""
  ),
  title: {
    default: "Abdur Rozaq F",
    template: "%s | Abdur Rozaq F",
  },
  description: METADATA.description,
  keywords: METADATA.keyword,
  authors: {
    name: METADATA.authors.name,
    url: METADATA.authors.url,
  },
  creator: METADATA.creator,
  openGraph: {
    type: "website",
    url: METADATA.openGraph.url,
    title: METADATA.openGraph.title,
    locale: METADATA.openGraph.locale,
    siteName: METADATA.openGraph.siteName,
    description: METADATA.openGraph.description,
    images: [
      {
        url: METADATA.openGraph.images.url,
        width: 1200,
        height: 630,
        alt: METADATA.openGraph.images.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
    images: [`${METADATA.siteUrl}/og-picture.png`],
    creator: "@abdurrozaqf_",
  },
  manifest: METADATA.manifest,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "w-full h-full antialiased",
        playfairDisplay.variable,
        inter.variable
      )}
    >
      <body
        suppressHydrationWarning
        className={cn("w-full h-min overflow-y-auto overflow-x-hidden")}
      >
        <AppProviders>
          <Layouts>{children}</Layouts>
        </AppProviders>
      </body>
    </html>
  );
}
