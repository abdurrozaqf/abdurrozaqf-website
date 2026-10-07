import Image from "next/image";

import { cn } from "@/libs/utils";

interface Ps5BackdropProps {
  imageUrl?: string | null;
  alt?: string;
}

export default function Ps5Backdrop({ imageUrl, alt = "" }: Ps5BackdropProps) {
  return (
    <div
      aria-hidden={true}
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden",
        "transition-opacity duration-300 motion-reduce:transition-none",
        imageUrl ? "opacity-100" : "opacity-0",
      )}
      style={{ backgroundColor: "#0A0D14" }}
    >
      {imageUrl ? (
        <>
          <Image
            fill
            priority
            sizes="100vw"
            src={imageUrl}
            alt={alt}
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(10,13,20,0.7)" }}
          />
        </>
      ) : null}
    </div>
  );
}