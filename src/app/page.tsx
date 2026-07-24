import { JsonLd } from "@/components/elements/json-ld";
import { buildProfilePageSchema } from "@/libs/seo";
import { HomePage } from "@/features/home";

export default function Page() {
  return (
    <>
      <JsonLd data={buildProfilePageSchema()} />
      <HomePage />
    </>
  );
}
