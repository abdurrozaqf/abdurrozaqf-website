import Link from "next/link";
import React from "react";

import { SOCIAL_MEDIA } from "@/common/constant/socialmedia";

export default function SocialMediaList() {
  return (
    <section className="flex gap-x-3 ">
      {SOCIAL_MEDIA.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          target="_black"
          aria-label={item.title}
        >
          <div
            className={`flex items-center gap-x-2 ${item.backgroundColor} px-3 py-1.5 rounded text-white`}
          >
            {item.icon}
            <p className="tracking-wide text-xs">{item.title}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
