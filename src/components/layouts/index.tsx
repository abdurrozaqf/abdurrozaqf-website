import React, { ReactNode } from "react";

import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";

interface LayoutsProps {
  children: React.ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full lg:min-h-screen flex flex-col items-center">
        <NavBar />
        <main className="w-full flex-1 scroll-smooth transition-all duration-300 lg:max-w-[854px]">
          {children}
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}

const a = "min-h-screen font-sans antialiased flex flex-col overflow-auto";
