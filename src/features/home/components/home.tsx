import { lazy } from "react";

import { Separator } from "@/components/ui/separator";
import Dashboard from "@/features/dashboard";
import Introductions from "./introductions";

const SkillList = lazy(() => import("./skill-list"));

export default function Home() {
  return (
    <>
      <Introductions />
      <Separator className="my-6" />
      <Dashboard />
      <Separator className="my-6" />
      <SkillList />
    </>
  );
}
