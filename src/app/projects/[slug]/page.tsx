import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  getGithubOverview,
  getGithubRepositoryDetail,
} from "@/features/github";

import {
  buildMissingProjectMetadata,
  buildProjectMetadata,
} from "@/features/projects";

import { ProjectDetailPage } from "@/features/projects";
import { JsonLd } from "@/components/elements/json-ld";
import { buildProjectSchemas } from "@/libs/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const overview = await getGithubOverview();
  const repositories = overview?.data?.repositories ?? [];

  return repositories.map((repo) => ({
    slug: repo.name,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const response = await getGithubRepositoryDetail(slug);

  if (!response?.data) {
    return buildMissingProjectMetadata(slug);
  }

  return buildProjectMetadata(response.data);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const response = await getGithubRepositoryDetail(slug);

  if (!response?.data) {
    notFound();
  }

  const repository = response.data;
  return (
    <>
      <JsonLd
        data={buildProjectSchemas({
          name: repository.name,
          description: repository.description,
          htmlUrl: repository.html_url,
          language: repository.language,
          topics: repository.topics ?? [],
          createdAt: repository.created_at,
          updatedAt: repository.updated_at,
          path: `/projects/${repository.name}`,
        })}
      />
      <ProjectDetailPage repo={repository} />
    </>
  );
}
