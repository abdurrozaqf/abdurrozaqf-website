import { Send } from "lucide-react";
import React from "react";

import SectionSubHeading from "@/components/elements/section-sub-heading";
import SectionHeading from "@/components/elements/section-heading";

import Contact from "@/features/contact";

export default function Contacts() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Contact" icon={<Send className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">Let`s get in touch</p>
        </SectionSubHeading>
      </div>
      <div>
        <Contact />
      </div>
    </section>
  );
}
