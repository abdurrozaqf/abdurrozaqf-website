import { getGithubContributions, getGithubOverview } from "@/features/github";
import { JsonLd } from "@/components/elements/json-ld";
import { buildProfilePageSchema } from "@/libs/seo";
import { HomePage } from "@/features/home";

export default async function Page() {
  const [overview, contributions] = await Promise.all([
    getGithubOverview(),
    getGithubContributions(),
  ]);

  return (
    <>
      <JsonLd data={buildProfilePageSchema()} />
      <HomePage overview={overview.data} contributions={contributions.data} />
    </>
  );
}
