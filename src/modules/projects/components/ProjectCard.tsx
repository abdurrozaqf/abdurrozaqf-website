import React from "react";

import { Repositories } from "@/common/types/response";
import { STACKS } from "@/common/constant/stacks";

import { formatDate } from "@/utils/formatter";
import Link from "next/link";

interface ProjectCardProps {
  data: Repositories;
}

export default function ProjectCard({ data }: ProjectCardProps) {
  const { name, createdAt, description, primaryLanguage } = data;

  return (
    <Link href={`/projects/${name}`}>
      <div className="w-full h-full border rounded-xl dark:bg-white/5 hover:scale-[1.02] transition-all cursor-pointer">
        <div className="h-full flex flex-col px-4 py-6 justify-between space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-xl font-medium text-neutral-800 dark:text-neutral-300 capitalize">
                {name}
              </h1>
              <p className="font-light text-neutral-600 dark:text-neutral-400 text-sm">
                {formatDate(createdAt!)}
              </p>
            </div>
            <p className="text-justify text-sm text-neutral-800 dark:text-neutral-300 leading-[1.8]">
              {description !== null ? description : "~"}
            </p>
          </div>
          <div>{primaryLanguage && <>{STACKS[primaryLanguage.name]}</>}</div>
        </div>
      </div>
    </Link>
  );
}
