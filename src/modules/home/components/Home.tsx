import { lazy } from "react";
import { Separator } from "@/components/ui/separator";
import Introductions from "./Introductions";
import Dashboard from "@/modules/dashboard";

const SkillList = lazy(() => import("./SkillList"));

interface HomeProps {}

export default function Home({}: HomeProps) {
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
