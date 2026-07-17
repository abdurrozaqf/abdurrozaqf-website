import { BoxesIcon } from "lucide-react";
import { Suspense } from "react";

import SectionSubHeading from "@/components/elements/section-sub-heading";
import SectionHeading from "@/components/elements/section-heading";
import LoadingProjects from "./loading-projects";
import ProjectCard from "./project-card";

import { Repositories } from "@/types/response";
import { MotionLi } from "@/lib/motion";

interface ProjectListsProps {
  data: Repositories[];
}

export default function ProjectLists({ data }: ProjectListsProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Projects"
          icon={<BoxesIcon className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My Projects</p>
        </SectionSubHeading>
      </div>

      <Suspense fallback={<LoadingProjects />}>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
          {data?.map((item, index) => (
            <MotionLi
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard data={item} />
            </MotionLi>
          ))}
        </ul>
      </Suspense>
    </section>
  );
}
