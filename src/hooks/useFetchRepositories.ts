"use client";

import { getRepositories } from "@/services/apis/github";
import { useQuery } from "@tanstack/react-query";

export default function useFetchRepositories() {
  return useQuery({
    queryKey: ["repositories"],
    queryFn: getRepositories,
  });
}
