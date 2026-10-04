export const ANALYTICS_EVENTS = {
  NAV_CLICK: "nav_click",
  VIEW_PROJECTS_CLICK: "view_projects_click",
  VIEW_PROJECTS_DETAIL: "view_projects_detail",
  SOCIAL_CLICK: "social_click",
  DOWNLOAD_CV_CLICK: "download_cv_click",
} as const;

export type AnalyticsEvent =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];
