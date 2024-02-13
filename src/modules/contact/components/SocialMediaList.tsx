import Link from "next/link";
import React from "react";

import { SOCIAL_MEDIA } from "@/common/constant/socialmedia";

export default function SocialMediaList() {
  return (
    <section className="flex gap-x-3 ">
      {SOCIAL_MEDIA.map((item, index) => (
        <Link
          aria-label={item.title}
          href={item.href}
          key={index}
          target="_black"
        >
          <div
            className={`flex items-center gap-x-2 ${item.backgroundColor} px-2 py-1 rounded`}
          >
            {item.icon}
            <p className="font-medium tracking-wide">{item.title}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
