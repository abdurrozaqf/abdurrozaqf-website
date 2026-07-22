import type { Metadata } from "next";

import AboutPage from "@/features/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineering philosophy, experience, and technical toolkit of Abdur Rozaq Fakhruddin — Front-End Engineer.",
};

export default function Page() {
  return <AboutPage />;
}
