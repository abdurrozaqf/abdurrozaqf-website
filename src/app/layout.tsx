import { Inter } from "next/font/google";
import { Metadata } from "next";
import "@/styles/globals.css";

import Layouts from "@/components/layouts";

import ThemeProvider from "@/services/providers/theme-provider";
import { METADATA } from "@/common/constant/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || ""
  ),
  title: {
    default: "Abdur Rozaq F",
    template: "%s | Abdur Rozaq F",
  },
  description: METADATA.description,
  keywords: METADATA.keyword,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  creator: METADATA.creator,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: METADATA.openGraph.locale,
    url: METADATA.openGraph.url,
    title: METADATA.title,
    description: METADATA.description,
    siteName: METADATA.openGraph.siteName,
    images: [
      {
        url: `${METADATA.siteUrl}/og-picture.png`,
        width: 1200,
        height: 630,
        alt: METADATA.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
    images: [`${METADATA.siteUrl}/og-picture.png`],
    creator: "@abdurrozaqf",
  },
  manifest: `${METADATA.siteUrl}/site.webmanifest`,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layouts>{children}</Layouts>
        </ThemeProvider>
      </body>
    </html>
  );
}
