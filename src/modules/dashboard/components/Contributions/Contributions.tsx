import { SiGithub } from "react-icons/si";
import { Suspense } from "react";

import SectionSubHeading from "@/components/elements/SectionSubHeading";
import SectionHeading from "@/components/elements/SectionHeading";

import ContributionsLoading from "./ContributionsLoading";
import ContributionStats from "./ContributionStats";

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
      <Suspense fallback={<ContributionsLoading />}>
        <ContributionStats />
      </Suspense>
    </section>
  );
}
