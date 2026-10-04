export const ANALYTICS_EVENTS = {
  NAV_CLICK: "nav_click",
  VIEW_PROJECTS_CLICK: "view_projects_click",
  SOCIAL_CLICK: "social_click",
  DOWNLOAD_CV_CLICK: "download_cv_click",
} as const;

export type AnalyticsEvent =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];
