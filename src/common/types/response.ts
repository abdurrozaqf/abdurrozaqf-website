export interface Contributions {
  colors: string[];
  totalContributions: number;
  months: { firstDay: Date; name: string; totalWeeks: number }[];
  weeks: { contributionDays: []; firstDay: Date }[];
}

export interface Repositories {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isFork: boolean;
  primaryLanguage: { name: string };
  stargazerCount: number;
  forkCount: number;
  url: string;
}

export interface DetailRepositories {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  url: string;
  collaborators_url: string;
  contributors_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  homepage: string;
  watchers_count: number;
  language: string;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    url: string;
    html_url: string;
  };
}

// const detailRepo = {
//   id: 736649420,
//   node_id: "R_kgDOK-hgzA",
//   name: "hi-spec",
//   full_name: "abdurrozaqf/hi-spec",
//   private: false,
//   owner: {
//     login: "abdurrozaqf",
//     id: 118920418,
//     node_id: "U_kgDOBxaU4g",
//     avatar_url: "https://avatars.githubusercontent.com/u/118920418?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/abdurrozaqf",
//     html_url: "https://github.com/abdurrozaqf",
//     followers_url: "https://api.github.com/users/abdurrozaqf/followers",
//     following_url:
//       "https://api.github.com/users/abdurrozaqf/following{/other_user}",
//     gists_url: "https://api.github.com/users/abdurrozaqf/gists{/gist_id}",
//     starred_url:
//       "https://api.github.com/users/abdurrozaqf/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/abdurrozaqf/subscriptions",
//     organizations_url: "https://api.github.com/users/abdurrozaqf/orgs",
//     repos_url: "https://api.github.com/users/abdurrozaqf/repos",
//     events_url: "https://api.github.com/users/abdurrozaqf/events{/privacy}",
//     received_events_url:
//       "https://api.github.com/users/abdurrozaqf/received_events",
//     type: "User",
//     site_admin: false,
//   },
//   html_url: "https://github.com/abdurrozaqf/hi-spec",
//   description: null,
//   fork: false,
//   url: "https://api.github.com/repos/abdurrozaqf/hi-spec",
//   forks_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/forks",
//   keys_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/keys{/key_id}",
//   collaborators_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/collaborators{/collaborator}",
//   teams_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/teams",
//   hooks_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/hooks",
//   issue_events_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/issues/events{/number}",
//   events_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/events",
//   assignees_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/assignees{/user}",
//   branches_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/branches{/branch}",
//   tags_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/tags",
//   blobs_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/git/blobs{/sha}",
//   git_tags_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/git/tags{/sha}",
//   git_refs_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/git/refs{/sha}",
//   trees_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/git/trees{/sha}",
//   statuses_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/statuses/{sha}",
//   languages_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/languages",
//   stargazers_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/stargazers",
//   contributors_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/contributors",
//   subscribers_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/subscribers",
//   subscription_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/subscription",
//   commits_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/commits{/sha}",
//   git_commits_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/git/commits{/sha}",
//   comments_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/comments{/number}",
//   issue_comment_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/issues/comments{/number}",
//   contents_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/contents/{+path}",
//   compare_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/compare/{base}...{head}",
//   merges_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/merges",
//   archive_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/{archive_format}{/ref}",
//   downloads_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/downloads",
//   issues_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/issues{/number}",
//   pulls_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/pulls{/number}",
//   milestones_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/milestones{/number}",
//   notifications_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/notifications{?since,all,participating}",
//   labels_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/labels{/name}",
//   releases_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/releases{/id}",
//   deployments_url:
//     "https://api.github.com/repos/abdurrozaqf/hi-spec/deployments",
//   created_at: "2023-12-28T13:33:58Z",
//   updated_at: "2024-01-13T14:11:13Z",
//   pushed_at: "2024-01-04T10:46:52Z",
//   git_url: "git://github.com/abdurrozaqf/hi-spec.git",
//   ssh_url: "git@github.com:abdurrozaqf/hi-spec.git",
//   clone_url: "https://github.com/abdurrozaqf/hi-spec.git",
//   svn_url: "https://github.com/abdurrozaqf/hi-spec",
//   homepage: "https://hi-spec.vercel.app",
//   size: 1782,
//   stargazers_count: 0,
//   watchers_count: 0,
//   language: "TypeScript",
//   has_issues: true,
//   has_projects: true,
//   has_downloads: true,
//   has_wiki: false,
//   has_pages: false,
//   has_discussions: false,
//   forks_count: 0,
//   mirror_url: null,
//   archived: false,
//   disabled: false,
//   open_issues_count: 0,
//   license: null,
//   allow_forking: true,
//   is_template: false,
//   web_commit_signoff_required: false,
//   topics: [],
//   visibility: "public",
//   forks: 0,
//   open_issues: 0,
//   watchers: 0,
//   default_branch: "main",
//   permissions: {
//     admin: true,
//     maintain: true,
//     push: true,
//     triage: true,
//     pull: true,
//   },
//   temp_clone_token: "",
//   network_count: 0,
//   subscribers_count: 1,
// };

// const datasRepo = [
//   {
//     id: 736649420,
//     node_id: "R_kgDOK-hgzA",
//     name: "hi-spec",
//     full_name: "abdurrozaqf/hi-spec",
//     private: false,
//     owner: {
//       login: "abdurrozaqf",
//       id: 118920418,
//       node_id: "U_kgDOBxaU4g",
//       avatar_url: "https://avatars.githubusercontent.com/u/118920418?v=4",
//       gravatar_id: "",
//       url: "https://api.github.com/users/abdurrozaqf",
//       html_url: "https://github.com/abdurrozaqf",
//       followers_url: "https://api.github.com/users/abdurrozaqf/followers",
//       following_url:
//         "https://api.github.com/users/abdurrozaqf/following{/other_user}",
//       gists_url: "https://api.github.com/users/abdurrozaqf/gists{/gist_id}",
//       starred_url:
//         "https://api.github.com/users/abdurrozaqf/starred{/owner}{/repo}",
//       subscriptions_url:
//         "https://api.github.com/users/abdurrozaqf/subscriptions",
//       organizations_url: "https://api.github.com/users/abdurrozaqf/orgs",
//       repos_url: "https://api.github.com/users/abdurrozaqf/repos",
//       events_url: "https://api.github.com/users/abdurrozaqf/events{/privacy}",
//       received_events_url:
//         "https://api.github.com/users/abdurrozaqf/received_events",
//       type: "User",
//       site_admin: false,
//     },
//     html_url: "https://github.com/abdurrozaqf/hi-spec",
//     description: null,
//     fork: false,
//     url: "https://api.github.com/repos/abdurrozaqf/hi-spec",
//     forks_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/forks",
//     keys_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/keys{/key_id}",
//     collaborators_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/collaborators{/collaborator}",
//     teams_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/teams",
//     hooks_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/hooks",
//     issue_events_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/issues/events{/number}",
//     events_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/events",
//     assignees_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/assignees{/user}",
//     branches_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/branches{/branch}",
//     tags_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/tags",
//     blobs_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/git/blobs{/sha}",
//     git_tags_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/git/tags{/sha}",
//     git_refs_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/git/refs{/sha}",
//     trees_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/git/trees{/sha}",
//     statuses_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/statuses/{sha}",
//     languages_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/languages",
//     stargazers_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/stargazers",
//     contributors_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/contributors",
//     subscribers_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/subscribers",
//     subscription_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/subscription",
//     commits_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/commits{/sha}",
//     git_commits_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/git/commits{/sha}",
//     comments_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/comments{/number}",
//     issue_comment_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/issues/comments{/number}",
//     contents_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/contents/{+path}",
//     compare_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/compare/{base}...{head}",
//     merges_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/merges",
//     archive_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/{archive_format}{/ref}",
//     downloads_url: "https://api.github.com/repos/abdurrozaqf/hi-spec/downloads",
//     issues_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/issues{/number}",
//     pulls_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/pulls{/number}",
//     milestones_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/milestones{/number}",
//     notifications_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/notifications{?since,all,participating}",
//     labels_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/labels{/name}",
//     releases_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/releases{/id}",
//     deployments_url:
//       "https://api.github.com/repos/abdurrozaqf/hi-spec/deployments",
//     created_at: "2023-12-28T13:33:58Z",
//     updated_at: "2024-01-13T14:11:13Z",
//     pushed_at: "2024-01-04T10:46:52Z",
//     git_url: "git://github.com/abdurrozaqf/hi-spec.git",
//     ssh_url: "git@github.com:abdurrozaqf/hi-spec.git",
//     clone_url: "https://github.com/abdurrozaqf/hi-spec.git",
//     svn_url: "https://github.com/abdurrozaqf/hi-spec",
//     homepage: "https://hi-spec.vercel.app",
//     size: 1782,
//     stargazers_count: 0,
//     watchers_count: 0,
//     language: "TypeScript",
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: false,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 0,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 0,
//     license: null,
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: "public",
//     forks: 0,
//     open_issues: 0,
//     watchers: 0,
//     default_branch: "main",
//   },
// ];
