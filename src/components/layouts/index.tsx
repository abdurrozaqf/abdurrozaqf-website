import type { ReactNode } from "react";

import { Ps5Dock, Ps5Topbar } from "@/features/ps5-shell";

import Ps5Footer from "./ps5-footer";

interface LayoutsProps {
  children: ReactNode;
}

/**
 * PS5 shell chrome: fixed topbar, page content, desktop footer row, mobile dock.
 *
 * `Navbar` and `Footer` (navbar.tsx / footer.tsx) are intentionally left on disk
 * but no longer rendered - only one chrome may be active at a time.
 */
export default function Layouts({ children }: LayoutsProps) {
  return (
    <>
      <Ps5Topbar />
      <main className="mx-auto flex w-full flex-1 scroll-smooth flex-col pt-14 pb-16 md:pb-0">
        {children}
      </main>
      <Ps5Footer />
      <Ps5Dock />
    </>
  );
}