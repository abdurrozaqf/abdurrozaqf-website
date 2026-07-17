import { Metadata } from "next";
import React from "react";

import PageHeading from "@/components/elements/page-heading";
import BackButton from "@/components/elements/back-button";
import Container from "@/components/elements/container";

import ProjectDetail from "@/features/projects/components/project-detail";
import { DetailRepositories } from "@/types/response";
import { getGithubDetailRepository } from "@/actions/github";

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
