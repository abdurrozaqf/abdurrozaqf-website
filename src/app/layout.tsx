import { Inter } from "next/font/google";
import { Metadata } from "next";
import "@/styles/globals.css";

import ThemeProvider from "@/services/providers/theme-provider";
import Layouts from "@/components/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Welcome to My Personal Website",
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
