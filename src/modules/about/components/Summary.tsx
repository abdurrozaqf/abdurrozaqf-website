import { User2 } from "lucide-react";
import React from "react";

import SectionSubHeading from "@/components/elements/SectionSubHeading";
import SectionHeading from "@/components/elements/SectionHeading";
import { summaryMock } from "@/common/mocks/summary";

interface SummaryProps {}

export default function Summary({}: SummaryProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Profile Summary"
          icon={<User2 className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">About me</p>
        </SectionSubHeading>
      </div>
      <div className="space-y-4 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose text-justify">
        <p data-aos="fade-left" data-aos-delay="100">
          {summaryMock.paragraphOne}
        </p>
        <p data-aos="fade-left" data-aos-delay="200">
          {summaryMock.paragraphTwo}
        </p>
        <p data-aos="fade-left" data-aos-delay="300">
          {summaryMock.paragraphThree}
        </p>
        <p data-aos="fade-left" data-aos-delay="400">
          {summaryMock.paragraphFour}
        </p>
      </div>
    </section>
  );
}
