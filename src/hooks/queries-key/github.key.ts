export const githubQueryKeys = {
  all: ["github"] as const,
  repositories: () => [...githubQueryKeys.all, "repositories"] as const,
  contributions: () => [...githubQueryKeys.all, "contributions"] as const,
  detailRepository: (repo: string) =>
    [...githubQueryKeys.all, "detailRepository", repo] as const,
};
