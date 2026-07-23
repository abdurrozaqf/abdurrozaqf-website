"use client";

import { useRef, type MouseEvent } from "react";

import { cn } from "@/libs/utils";

export default function NotFoundHeadline() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLHeadingElement>) {
    const target = event.currentTarget;
    const { offsetX, offsetY } = event.nativeEvent;
    const moveX = (offsetX / target.clientWidth - 0.5) * 10;
    const moveY = (offsetY / target.clientHeight - 0.5) * 10;

    target.style.textShadow = `${moveX}px ${moveY}px 0px rgb(201 198 197 / 0.2)`;
  }

  function handleMouseLeave() {
    if (!headingRef.current) return;
    headingRef.current.style.textShadow = "none";
  }

  return (
    <h1
      ref={headingRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "font-heading text-[120px] leading-none tracking-tighter uppercase md:text-[180px] lg:text-[240px]",
        "opacity-90 select-none"
      )}
    >
      404
    </h1>
  );
}
