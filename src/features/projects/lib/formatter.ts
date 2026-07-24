import type { LucideIcon } from "lucide-react";

export interface MetricItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  label: string;
  dateTime: string;
  absolute: string;
  relative: string;
}

export function formatRepoLabel(name: string): string {
  return name.toUpperCase().replace(/[-\s]/g, "_");
}

export function formatMetric(value: number | undefined): string {
  return (value ?? 0).toLocaleString();
}

export function hasLiveDemo(homepage: string | null | undefined): boolean {
  return Boolean(homepage?.trim());
}
