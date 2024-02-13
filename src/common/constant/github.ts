export const GITHUB_API_BASE_URL = "https://api.github.com/graphql";
export const GITHUB_ACCOUNTS = {
  username: "abdurrozaqf",
  token: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  endpoint: "/api/github?type=personal",
  type: "personal",
  is_active: true,
};

export const GITHUB_USER_QUERY = `query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          colors
          totalContributions
          months {
            firstDay
            name
            totalWeeks
          }
          weeks {
            contributionDays {
              color
              contributionCount
              date
            }
            firstDay
          }
        }
      }
    }
  }`;

export const GITHUB_REPOS_QUERY = `query($username: String!) {
    user(login: $username) {
      repositories(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          id
          name
          description
          createdAt
          updatedAt
          isFork
          primaryLanguage {
            name
          }
          stargazerCount
          forkCount
          url
        }
      }
    }
  }`;
