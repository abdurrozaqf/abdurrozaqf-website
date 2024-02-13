import { lazy } from "react";
import { Separator } from "@/components/ui/separator";
import Introductions from "./Introductions";
import Dashboard from "@/modules/dashboard";

const SkillList = lazy(() => import("./SkillList"));

interface HomeProps {
  githubData: any;
}

export default function Home({ githubData }: HomeProps) {
  return (
    <>
      <Introductions />
      <Separator className="my-6" />
      <Dashboard githubData={githubData} />
      <Separator className="my-6" />
      <SkillList />
    </>
  );
}
