"use client";

import { useTheme } from "next-themes";
import React from "react";

import { Button } from "@/components/ui/button";
import Menu from "./Menu";

import { MENU_ITEMS } from "@/common/constant/menu";

import { MoonIcon, MoonStar, SunIcon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  return (
    <nav className="w-full lg:max-w-[854px] flex items-center justify-start transition-all duration-300 px-4 md:px-8 mt-3">
      <Menu list={MENU_ITEMS} />
      <Button
        type="button"
        variant="outline"
        onClick={handleTheme}
        className={`w-fit h-fit p-2 border-none ${
          theme === "light" ? "btn-theme" : "btn-theme-dark"
        }`}
      >
        {theme === "light" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
      </Button>
    </nav>
  );
}
