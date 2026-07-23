import { Metadata } from "next";

import NotFoundPage from "@/features/not-found";

export const metadata: Metadata = {
  title: "Page Not Found!",
};

export default function NotFound() {
  return <NotFoundPage />;
}
