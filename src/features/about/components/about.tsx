import { Separator } from "@/components/ui/separator";
import Summary from "./summary";
import Contact from "./contact";

interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <>
      <Summary />
      <Separator className="my-6" />
      <Contact />
    </>
  );
}
