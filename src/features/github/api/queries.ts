export const GITHUB_ACCOUNTS = {
  username: "abdurrozaqf",
  token: process.env.GITHUB_TOKEN,
  endpoint: "/api/github?type=personal",
  type: "personal",
  is_active: true,
};

export const GITHUB_CONTRIBUTIONS_QUERY = `
  query($username: String!) {
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
  }
`;

export const GITHUB_OVERVIEW_QUERY = `
  query($username: String!) {
    user(login: $username) {
      followers {
        totalCount
      }

      repositories(
        privacy: PUBLIC
        first: 100
        ownerAffiliations: OWNER
        orderBy: {
          field: PUSHED_AT
          direction: DESC
        }
      ) {
        totalCount

        nodes {
          id
          name
          description
          createdAt
          updatedAt
          pushedAt
          stargazerCount
          forkCount
          isArchived
          isFork
          url
          homepageUrl
          primaryLanguage {
            name
          }
          repositoryTopics(first: 20) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }

      pinnedItems(first: 2, types: REPOSITORY) {
        totalCount
        nodes {
          ... on Repository {
            id
            name
            description
            createdAt
            updatedAt
            pushedAt
            stargazerCount
            forkCount
            isArchived
            isFork
            url
            homepageUrl
            primaryLanguage {
              name
            }
            repositoryTopics(first: 20) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
