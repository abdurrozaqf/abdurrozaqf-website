import { SiGithub } from "react-icons/si";

import SectionSubHeading from "@/components/elements/section-sub-heading";
import SectionHeading from "@/components/elements/section-heading";

import ContributionStats from "./contribution-stats";

export default async function Contributions() {
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
      <ContributionStats />
    </section>
  );
}
