import { Noto_Sans, Playfair_Display } from "next/font/google";
import { Metadata } from "next";

import "@/styles/circular-transition.css";
import "@/styles/globals.css";

import Layouts from "@/components/layouts";

import { METADATA } from "@/common/constant/metadata";
import AppProviders from "@/providers/app-providers";
import { cn } from "@/libs/utils";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

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
      className={cn(
        "font-sans",
        notoSans.variable,
        playfairDisplayHeading.variable
      )}
    >
      <body className={cn("antialiased")} suppressHydrationWarning>
        <AppProviders>
          <Layouts>{children}</Layouts>
        </AppProviders>
      </body>
    </html>
  );
}
