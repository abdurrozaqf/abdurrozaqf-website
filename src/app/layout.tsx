import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";
import "@/styles/globals.css";

import ReactQueryProvider from "@/services/providers/react-query-provider";
import ThemeProvider from "@/services/providers/theme-provider";
import { cn } from "@/utils/utils";

import Layouts from "@/components/layouts";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  description: "Welcome to My Personal Website",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(fontSans.variable)}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Layouts>{children}</Layouts>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
