import { Metadata } from "next";

import Container from "@/components/elements/Container";

import { getGithubData } from "@/services/apis/github";
import { METADATA } from "@/common/constant/metadata";
import Home from "@/modules/home";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
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
