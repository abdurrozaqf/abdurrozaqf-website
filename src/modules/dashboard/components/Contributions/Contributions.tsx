import { SiGithub } from "react-icons/si";

import SectionSubHeading from "@/components/elements/SectionSubHeading";
import SectionHeading from "@/components/elements/SectionHeading";
import Calendar from "./Calendar";

interface ContributionsProps {
  githubData: any;
}

export default function Contributions({ githubData }: ContributionsProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Contributions"
          icon={<SiGithub className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            My contributions from last year on github.
          </p>
          <p>@abdurrozaqf</p>
        </SectionSubHeading>
      </div>
      {!githubData && <div className="dark:text-neutral-400">No Data</div>}
      <div className="py-2">
        {githubData && (
          <div className="space-y-3">
            <Calendar data={githubData} />
          </div>
        )}
      </div>
    </section>
  );
}
