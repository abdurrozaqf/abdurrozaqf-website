import type { ComponentProps } from "react";
import { cn } from "@/libs/utils";

function Container({ className, ...others }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "relative w-full px-3 md:px-5 xl:px-10 border-b",
        className
      )}
      {...others}
    />
  );
}

function ContainerContent({ className, ...others }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto max-w-container-max w-full", className)}
      {...others}
    />
  );
}

export { Container, ContainerContent };
