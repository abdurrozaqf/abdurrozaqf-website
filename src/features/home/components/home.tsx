import ProjectsSection from "./projects-section";
import StatusSection from "./status-section";
import StatsSection from "./stats-section";
import HeroSection from "./hero-section";
import { getGithubContributions, getGithubOverview } from "@/features/github";

export default async function HomePage() {
  const [overview_res, contributions_res] = await Promise.all([
    getGithubOverview(),
    getGithubContributions(),
  ]);

  if (!overview_res?.data || !contributions_res?.data) {
    return null;
  }

  const { stats, repositories, pinnedRepositories } = overview_res.data;

  const featured_project = repositories[0];
  const secondary_projects = repositories.slice(1, 3);

  return (
    <>
      <HeroSection />
      <StatusSection />
      <ProjectsSection
        featuredProject={featured_project}
        secondaryProjects={secondary_projects}
      />
      <StatsSection
        contributions={contributions_res?.data}
        pinned_repositories={pinnedRepositories}
        stats={stats}
      />
    </>
  );
}
