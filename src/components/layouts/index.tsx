import type { ReactNode } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full mx-auto scroll-smooth">{children}</main>
      <Footer />
    </>
  );
}
