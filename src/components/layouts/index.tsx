"use client";

import React, { lazy, useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

import Navbar from "./Navbar/index";
import "aos/dist/aos.css";

const Footer = lazy(() => import("./Footer"));

interface LayoutsProps {
  children: React.ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const pathname = usePathname();
  const url = [
    "/projects/hi-SPEC",
    "/projects/cloudbite",
    "/projects/sinau-apps",
    "/projects/byek-movies",
    "/projects/pokedex-app",
    "/projects/Wisata-App",
    "/projects/real-estate-landing-page",
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full lg:min-h-screen flex flex-col items-center">
        <div
          className={`w-full lg:max-w-[854px] transition-all duration-300 ${
            url.includes(pathname)
              ? "-translate-y-10 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <Navbar />
        </div>
        <main className="w-full flex-1 scroll-smooth transition-all duration-300 lg:max-w-[854px]">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
