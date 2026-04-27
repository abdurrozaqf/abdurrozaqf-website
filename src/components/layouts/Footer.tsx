"use client";

import Link from "next/link";
import React from "react";

import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full flex justify-center py-4">
      <div className="w-full lg:max-w-[854px] px-4 md:px-8 flex items-center justify-between">
        <p className="text-[12px] md:text-sm tracking-wide">
          © {currentYear} Abdur Rozaq Fakhruddin. All rights reserved
        </p>
        <div className="flex items-center gap-x-3">
          <Link
            href={`https://github.com/abdurrozaqf`}
            target="_blank"
            aria-label="github"
          >
            <SiGithub size={20} />
          </Link>
          <Link
            href={`https://linkedin.com/in/abdurrozaqf`}
            target="_blank"
            aria-label="linkedin"
          >
            <BsLinkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
