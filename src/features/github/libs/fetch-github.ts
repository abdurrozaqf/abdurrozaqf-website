// src/lib/github.ts

import { GITHUB_ACCOUNTS } from "../api/queries";

type GithubGraphQLResponse<T> = {
  data: T;
  errors?: {
    message: string;
  }[];
};

const GRAPHQL_ENDPOINT = "https://api.github.com/graphql";
const REST_ENDPOINT = "https://api.github.com";

const defaultNextCache = {
  cache: "force-cache",
  revalidate: 60 * 60 * 24, // 1 day
  tags: ["github"],
};

function getGithubToken(): string | undefined {
  const token = process.env.GITHUB_TOKEN?.trim();
  if (token) return token;

  const g = globalThis as unknown as {
    GITHUB_TOKEN?: string;
    env?: { GITHUB_TOKEN?: string };
  };
  if (g.GITHUB_TOKEN?.trim()) return g.GITHUB_TOKEN.trim();
  if (g.env?.GITHUB_TOKEN?.trim()) return g.env.GITHUB_TOKEN.trim();

  return undefined;
}

/**
 * GitHub GraphQL (POST)
 */
export async function fetchGithubGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const token = getGithubToken();
  if (!token) {
    throw new Error(
      "GitHub GraphQL Error: GITHUB_TOKEN environment variable is not configured.",
    );
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "MyGitHubApp",
  };

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables: {
        username: GITHUB_ACCOUNTS.username,
        ...variables,
      },
    }),
    next: defaultNextCache,
  });

  if (!response.ok) {
    throw new Error(
      `GitHub GraphQL Error: ${response.status} ${response.statusText}`,
    );
  }

  const json = (await response.json()) as GithubGraphQLResponse<T>;

  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}

/**
 * GitHub REST API (GET)
 */
export async function fetchGithubRest<T>(endpoint: string): Promise<T> {
  const token = getGithubToken();
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "MyGitHubApp",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${REST_ENDPOINT}${endpoint}`, {
    headers,
    next: defaultNextCache,
  });

  if (!response.ok) {
    throw new Error(
      `GitHub REST Error: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<T>;
}
