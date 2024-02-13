"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
  withMarginTop?: boolean;
}

export default function Container({ children, ...others }: ContainerProps) {
  return (
    <div className={`mb-10 p-4 md:p-8`} {...others}>
      {children}
    </div>
  );
}
