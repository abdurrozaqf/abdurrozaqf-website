import { Metadata } from "next";

import PageHeading from "@/components/elements/PageHeading";
import Container from "@/components/elements/Container";
import Contact from "@/modules/contact";

export const metadata: Metadata = {
  title: "Contact | Abdur Rozaq F",
  description: "My Contact",
};

const PAGE_TITLE = "Contact";
const PAGE_DESCRIPTION = "Let`s get in touch";

interface ContactPageProps {}

export default function ContactPage({}: ContactPageProps) {
  return (
    <>
      <Container>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
    </>
  );
}
