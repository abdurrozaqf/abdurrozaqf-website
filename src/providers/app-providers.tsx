import type { ReactNode } from "react";

import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      enableSystem
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
