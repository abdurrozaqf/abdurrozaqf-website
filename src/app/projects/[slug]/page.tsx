import { Metadata } from "next";
import React from "react";

import PageHeading from "@/components/elements/PageHeading";
import BackButton from "@/components/elements/BackButton";
import Container from "@/components/elements/Container";

import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { DetailRepositories } from "@/common/types/response";
import { getGithubDetailRepository } from "@/action/github";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = await getProjets(slug);
  return {
    title: detail.name,
    description: detail.description,
  };
}

export default async function DetailProjectPage({ params }: Props) {
  const { slug } = await params;
  const detail = await getProjets(slug);

  return (
    <>
      <Container data-aos="fade-left">
        <BackButton url="/projects" />
        <PageHeading title={detail.name} description={detail.description} />
        <ProjectDetail data={detail} />
      </Container>
    </>
  );
}

async function getProjets(slug: string): Promise<DetailRepositories> {
  const response = await getGithubDetailRepository(slug);
  return response.data as DetailRepositories;
}
