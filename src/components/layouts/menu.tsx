import React from "react";

import { MenuItemProps } from "@/types/menu";
import MenuItem from "./menu-item";

type MenuProps = {
  title?: string;
  list: MenuItemProps[];
};

export default function Menu({ title, list }: MenuProps) {
  return (
    <div className="flex">
      {list.map((item, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
}
