import { getGithubData } from "@/services/apis/github";
import Calendar from "./Calendar";

export default async function ContributionStats() {
  const githubData = await getGithubData();

  return (
    <>
      {!githubData && <div className="dark:text-neutral-400">No Data</div>}
      <div className="py-2">
        {githubData && (
          <div className="space-y-3">
            <Calendar data={githubData} />
          </div>
        )}
      </div>
    </>
  );
}
