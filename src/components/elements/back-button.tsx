"use client";

import { ChevronLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface BackButtonProps {
  url: string;
}

export default function BackButton({ url }: BackButtonProps) {
  const router = useRouter();

  const handleOnClick = () => {
    if (url) {
      window.location.href = url;
    } else {
      router.back();
    }
  };

  return (
    <div className="w-fit mb-6">
      <div
        onClick={handleOnClick}
        className="flex items-center gap-x-2 cursor-pointer hover:gap-x-3 transition-all duration-300"
      >
        <ChevronLeftCircle size={25} />
        <span className="font-medium">Back</span>
      </div>
    </div>
  );
}
