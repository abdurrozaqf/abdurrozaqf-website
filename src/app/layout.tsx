import { Inter } from "next/font/google";
import { Metadata } from "next";
import "@/styles/globals.css";

import Layouts from "@/components/layouts";

import ThemeProvider from "@/services/providers/theme-provider";
import { METADATA } from "@/common/constant/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  description: "Welcome to My Personal Website",
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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
