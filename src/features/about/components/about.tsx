import { Separator } from "@/components/ui/separator";
import Summary from "./summary";
import Contact from "./contact";

export default function AboutPage() {
  return (
    <>
      <Summary />
      <Separator className="my-6" />
      <Contact />
    </>
  );
}
