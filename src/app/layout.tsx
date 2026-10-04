import { Inter, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";

import "@/styles/circular-transition.css";
import "@/styles/globals.css";

import { METADATA, SITE_URL, buildPageMetadata } from "@/constants/metadata";
import AppProviders from "@/providers/app-providers";

import { JsonLd } from "@/components/elements/json-ld";
import Layouts from "@/components/layouts";

import { buildSiteSchemas } from "@/libs/seo";
import { cn } from "@/libs/utils";
import Script from "next/script";

const SITE_SCHEMAS = buildSiteSchemas();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

const homeMetadata = buildPageMetadata({
  title: METADATA.title,
  description: METADATA.description,
  path: "",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: METADATA.title,
    template: `%s | ${METADATA.shortTitle}`,
  },
  description: METADATA.description,
  keywords: METADATA.keyword,
  authors: {
    name: METADATA.authors.name,
    url: METADATA.authors.url,
  },
  creator: METADATA.creator,
  alternates: homeMetadata.alternates,
  openGraph: homeMetadata.openGraph,
  twitter: homeMetadata.twitter,
  robots: homeMetadata.robots,
  manifest: METADATA.manifest,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "w-full h-full antialiased",
        inter.variable,
        bebasNeue.variable,
        jetbrainsMono.variable,
      )}
    >
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','${GTM_ID as string}');`}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "w-full min-h-screen flex flex-col overflow-y-auto overflow-x-hidden",
        )}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <AppProviders>
          <Layouts>{children}</Layouts>
          <JsonLd data={SITE_SCHEMAS} />
        </AppProviders>
      </body>
    </html>
  );
}
