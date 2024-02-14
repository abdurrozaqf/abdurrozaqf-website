import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ScreenShare } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Separator } from "@/components/ui/separator";

import { MENU_REPOSITORES } from "@/common/constant/repositories";
import { DetailRepositories } from "@/common/types/response";
import { STACKS } from "@/common/constant/stacks";

interface ProjectDetail {
  data: DetailRepositories;
}

export default function ProjectDetail({ data }: ProjectDetail) {
  const detail = MENU_REPOSITORES.find((item) => item.title === data.name);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <p className="font-medium text-[15px] text-neutral-700 dark:text-neutral-300">
            Tech Stack :
          </p>
          <span className="flex items-center gap-x-2">
            {detail?.tech_stacks.map((item: string, index: number) => (
              <div key={index}>{item && <>{STACKS[item]}</>}</div>
            ))}
          </span>
        </div>
        <div className="flex gap-x-8">
          <Link
            aria-label={data.name}
            href={data.html_url}
            className="flex items-center gap-x-2"
          >
            <SiGithub size={20} />
            <span>Source Code</span>
          </Link>
          <Link
            aria-label={data.name}
            href={data.homepage}
            target="_blank"
            className="flex items-center gap-x-2"
          >
            <ScreenShare size={20} />
            <span>Live Demo</span>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={detail?.image!}
          priority
          alt={data.name}
          width="0"
          height="100"
          sizes="100vw"
          className="w-full h-[404.28px] object-cover object-top rounded"
        />
      </div>
      <Separator className="my-2" />
      <div className="space-y-2">
        <p className="text-xl font-bold">Stack Used</p>
        <ul className="ml-5 list-disc space-y-2">
          {detail?.tech_stacks.map((item) => (
            <li key={item}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
