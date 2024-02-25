import { Metadata } from "next";
import React from "react";

import PageHeading from "@/components/elements/PageHeading";
import BackButton from "@/components/elements/BackButton";
import Container from "@/components/elements/Container";

import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { DetailRepositories } from "@/common/types/response";
import { getDetailRepo } from "@/services/apis/github";

interface DetailProjectProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: DetailProjectProps): Promise<Metadata> {
  return {
    title: params.slug,
  };
}

export default async function DetailProjectPage({
  params,
}: DetailProjectProps) {
  const detail = await getProjets(params.slug);

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
  const response = await getDetailRepo(slug);
  return response;
}
