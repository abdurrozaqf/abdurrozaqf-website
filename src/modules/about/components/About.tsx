import { Separator } from "@/components/ui/separator";
import Summary from "./Summary";
import Contact from "./Contact";

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
