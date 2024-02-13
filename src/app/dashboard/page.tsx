import { Metadata } from "next";

import { getGithubData } from "@/services/apis/github";
import Dashboard from "@/modules/dashboard";

import PageHeading from "@/components/elements/PageHeading";
import Container from "@/components/elements/Container";

export const metadata: Metadata = {
  title: "Dashboard | Abdur Rozaq F",
  description: "My Dashboard Github",
};

const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
  " This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

export default async function DahboardPage() {
  const githubData = await getGithubData();

  return (
    <>
      <Container>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Dashboard githubData={githubData} />
        {/* <p className="text-slate-700 dark:text-slate-300 mb-2">Statistic</p>
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs?username=abdurrozaqf&layout=compact&theme=react&hide=php&langs_count=6"
        alt="abdurrozaqf"
      /> */}
      </Container>
    </>
  );
}
