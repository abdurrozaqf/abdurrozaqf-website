import { Send } from "lucide-react";
import React from "react";

import SectionSubHeading from "@/components/elements/SectionSubHeading";
import SectionHeading from "@/components/elements/SectionHeading";

import Contact from "@/modules/contact";

interface ContactProps {}

export default function Contacts({}: ContactProps) {
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
