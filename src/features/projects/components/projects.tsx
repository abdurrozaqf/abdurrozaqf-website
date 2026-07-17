import ProjectLists from "./project-lists";

interface ProjectsProps {
  projectsData: any;
}

export default function Projects({ projectsData }: ProjectsProps) {
  return (
    <>
      <ProjectLists data={projectsData} />
    </>
  );
}
