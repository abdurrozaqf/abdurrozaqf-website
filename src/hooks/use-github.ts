"use client";

import { useQuery } from "@tanstack/react-query";

import { githubQueryKeys } from "./query-keys/github";
import { getGithubRepositories } from "@/actions/github";

export default function useFetchRepositories() {
  return useQuery({
    queryKey: githubQueryKeys.repositories(),
    queryFn: getGithubRepositories,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
}
