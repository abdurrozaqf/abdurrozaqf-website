import { getGithubData } from "@/actions/github";
import Calendar from "./calendar";
import { Contributions } from "@/types/response";

export default async function ContributionStats() {
  const githubData = await getGithubData();

  return (
    <>
      {!githubData && <div className="dark:text-neutral-400">No Data</div>}
      <div className="py-2">
        {githubData && (
          <div className="space-y-3">
            <Calendar data={githubData.data as Contributions} />
          </div>
        )}
      </div>
    </>
  );
}
