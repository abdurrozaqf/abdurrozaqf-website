import ProjectsSection from "./projects-section";
import StatusSection from "./status-section";
import StatsSection from "./stats-section";
import HeroSection from "./hero-section";

import { TContributions, TMappedGithubOverview } from "@/features/github";

interface Props {
  overview?: TMappedGithubOverview | null;
  contributions?: TContributions | null;
}

const EMPTY_OVERVIEW = {
  repositories: [],
  pinnedRepositories: [],
  stats: null,
};

export default function HomePage({ overview, contributions }: Props) {
  const { repositories, pinnedRepositories, stats } =
    overview ?? EMPTY_OVERVIEW;

  const featured_project = repositories[0];
  const secondary_projects = repositories.slice(1, 3);

  return (
    <>
      <HeroSection />
      <StatusSection />
      {featured_project && secondary_projects && (
        <ProjectsSection
          featuredProject={featured_project}
          secondaryProjects={secondary_projects}
        />
      )}
      {contributions && stats && (
        <StatsSection
          contributions={contributions}
          pinned_repositories={pinnedRepositories}
          stats={stats}
        />
      )}
    </>
  );
}
