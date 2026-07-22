import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Code2,
  Database,
  Gauge,
  GitBranch,
  LayoutTemplate,
  Palette,
  PenTool,
  Terminal,
} from "lucide-react";

import { Container, ContainerContent } from "@/components/elements/container";
import about from "@/data/about.json";

const SKILL_ICONS: Record<string, LucideIcon> = {
  code: Code2,
  terminal: Terminal,
  palette: Palette,
  layout: LayoutTemplate,
  gauge: Gauge,
  accessibility: Accessibility,
  pen: PenTool,
  git: GitBranch,
  database: Database,
};

export default function AboutSkills() {
  return (
    <Container>
      <ContainerContent className="grid grid-cols-1 col-span-4 md:grid-cols-4 border-x">
        <div className="col-span-1 p-6 md:p-12 md:border-r">
          <span className="block mb-6 modular-label md:mb-8">
            [ 04 // TOOLKIT ]
          </span>
          <h2 className="mb-4 text-3xl uppercase font-heading md:text-4xl">
            SKILLS
          </h2>
        </div>

        <div className="grid grid-cols-1 col-span-1 divide-y md:col-span-3 md:grid-cols-3 md:divide-x md:divide-y-0">
          {about.skills.map((group) => (
            <div key={group.category} className="p-6 md:p-12">
              <h4 className="mb-8 font-mono text-xs uppercase tracking-widest text-foreground">
                {group.category}
              </h4>
              <div className="flex flex-col gap-3">
                {group.items.map((item) => {
                  const Icon = SKILL_ICONS[item.icon] ?? Code2;
                  return (
                    <span
                      key={item.name}
                      className="flex items-center justify-between px-4 py-3 font-mono text-[10px] uppercase border"
                    >
                      {item.name}
                      <Icon className="size-4 shrink-0" aria-hidden />
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ContainerContent>
    </Container>
  );
}
