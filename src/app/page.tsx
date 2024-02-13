import { Metadata } from "next";

import Container from "@/components/elements/Container";
import { getGithubData } from "@/services/apis/github";
import Home from "@/modules/home";

export const metadata: Metadata = {
  title: "Abdur Rozaq F | Personal Website",
};

export default async function HomPage() {
  const githubData = await getGithubData();

  return (
    <>
      <Container data-aos="fade-left">
        <Home githubData={githubData} />
      </Container>
    </>
  );
}
