import React from "react";

import { summaryMock } from "@/common/mocks/summary";
import { MotionDiv } from "@/utils/motion";

interface SummaryProps {}

export default function Summary({}: SummaryProps) {
  const paragraphs = Object.values(summaryMock);
  return (
    <section>
      <div className="space-y-4 leading-[1.6] text-neutral-800 dark:text-neutral-300 md:leading-loose text-justify">
        {paragraphs.map((item: string, index: number) => (
          <MotionDiv
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <p>{item}</p>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
