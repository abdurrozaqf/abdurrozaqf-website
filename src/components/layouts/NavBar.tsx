"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

import { MoonStar, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <header className="w-full flex justify-center sticky top-0 z-10 bg-background/50 backdrop-blur-sm border-b">
      <nav className="w-full lg:max-w-[854px] flex items-center justify-between py-4 px-4 md:px-0">
        <Link href="/" className="hidden md:block">
          <h1 className="text-xl font-bold">abdurrozaqf</h1>
        </Link>
        <div className="flex items-center gap-x-2 md:gap-x-10">
          <Link href="/">
            <p
              className={`font-light tracking-wide transition-all ${
                pathname === "/"
                  ? "border-b-2 pb-1 border-black dark:border-white"
                  : "border-none"
              }`}
            >
              Home
            </p>
          </Link>
          <Link href="/projects">
            <p
              className={`font-light tracking-wide transition-all ${
                pathname === "/projects"
                  ? "border-b-2 pb-1 border-black dark:border-white"
                  : "border-none"
              }`}
            >
              Projects
            </p>
          </Link>
          <Link href="/about">
            <p
              className={`font-light tracking-wide transition-all ${
                pathname === "/about"
                  ? "border-b-2 pb-1 border-black dark:border-white"
                  : "border-none"
              }`}
            >
              About
            </p>
          </Link>
          <Link href="/contact">
            <p
              className={`font-light tracking-wide transition-all ${
                pathname === "/contact"
                  ? "border-b-2 pb-1 border-black dark:border-white"
                  : "border-none"
              }`}
            >
              Contact
            </p>
          </Link>
          <Link href="/dashboard">
            <p
              className={`font-light tracking-wide transition-all ${
                pathname === "/dashboard"
                  ? "border-b-2 pb-1 border-black dark:border-white"
                  : "border-none"
              }`}
            >
              Dashboard
            </p>
          </Link>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={handleTheme}
          className={`w-fit h-fit p-2 border-slate-200 dark:border-slate-900 ${
            theme === "light" ? "btn-theme" : "btn-theme-dark"
          }`}
        >
          {theme === "light" ? <SunIcon /> : <MoonStar />}
        </Button>
      </nav>
    </header>
  );
}
