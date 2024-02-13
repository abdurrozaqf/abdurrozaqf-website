"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  href: string;
  children?: ReactNode;
}

export default function MenuItem({ title, href }: MenuItemProps) {
  const pathname = usePathname();
  const url = new URL(href, "https://3000");

  const activeClasses = `font-medium mr-6 hover:border-b hover:border-black/50 dark:hover:border-slate-400 leading-none ${
    pathname === url.pathname
      ? "text-black dark:text-white"
      : "text-black/50 dark:text-slate-400"
  }`;

  const itemComponent = () => {
    return <div className={activeClasses}>{title}</div>;
  };

  return (
    <Link aria-label={title} href={href} className="font-medium">
      {itemComponent()}
    </Link>
  );
}
