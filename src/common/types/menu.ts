import { JSX, ReactNode } from "react";

export type MenuItemProps = {
  title: string;
  href: string;
  icon?: JSX.Element | ReactNode;
  isShow?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  eventName?: string;
  backgroundColor?: string;
  isHover?: boolean;
};
