import React from "react";

import { MenuItemProps } from "@/common/types/menu";
import MenuItem from "./MenuItem";

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
