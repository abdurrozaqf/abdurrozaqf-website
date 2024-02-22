"use client";

import Link from "next/link";
import React from "react";

import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center py-4">
      <div className="w-full lg:max-w-[854px] px-4 md:px-8 flex items-center justify-between">
        <p className="text-sm tracking-wide">
          © 2024 Abdur Rozaq Fakhruddin. All rights reserved
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
            <SiLinkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
