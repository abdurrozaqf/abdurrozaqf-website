import { Metadata } from "next";

import NotFoundPage from "@/features/not-found";
import { buildPageMetadata } from "@/constants/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Page Not Found",
    description: "The page you requested could not be found on codur.dev.",
    path: "/404",
    noIndex: true,
  }),
};

export default function NotFound() {
  return <NotFoundPage />;
}
