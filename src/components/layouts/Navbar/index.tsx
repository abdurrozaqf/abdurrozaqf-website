"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import Menu from "./Menu";

import { useCircularTransition } from "@/hooks/use-circular-transition";
import { MENU_ITEMS } from "@/common/constant/menu";

export default function Navbar() {
  const { toggleTheme } = useCircularTransition();

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    toggleTheme(event);
  };

  return (
    <nav className="w-full lg:max-w-[854px] flex items-center justify-start transition-all duration-300 px-4 md:px-8 mt-3">
      <Menu list={MENU_ITEMS} />
      <Button
        size="icon"
        variant="ghost"
        onClick={handleToggle}
        className="cursor-pointer mode-toggle-button relative overflow-hidden"
      >
        <SunIcon className="hidden dark:block h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100" />
        <MoonIcon className="block dark:hidden h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100" />
        <span className="sr-only hidden dark:block">Switch to light mode</span>
        <span className="sr-only block dark:hidden">Switch to dark mode</span>
      </Button>
    </nav>
  );
}
