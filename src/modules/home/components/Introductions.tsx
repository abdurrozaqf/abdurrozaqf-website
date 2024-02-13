import React from "react";

import TypeAnimation from "@/components/elements/TypeAnimation";

interface IntroductionsProps {}

export default function Introductions({}: IntroductionsProps) {
  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-medium lg:text-3xl">
          <TypeAnimation
            sequence={[
              "Hi, I'm Abdur Rozaq Fakhruddin",
              "Hi, I'm Frontend Engineer",
            ]}
            delay={3000}
          />
        </div>
      </div>
      <div className="space-y-4">
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose text-justify">
          Passionate and seasoned Software Engineer with a strong focus on
          frontend development. Proficient in TypeScript and well-versed in all
          aspects of web technologies. Collaborative team player dedicated to
          delivering efficient, scalable, and visually appealing web
          applications. Currently, I am looking for an opportunity to thrive on
          what I've learned.
        </p>
      </div>
    </section>
  );
}
