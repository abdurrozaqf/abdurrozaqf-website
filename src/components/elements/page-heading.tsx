import { Separator } from "../ui/separator";

interface PageHeadingProps {
  title: string;
  description?: string;
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <>
      <h1 className="font-semibold text-2xl mb-2">{title}</h1>
      <p className="mb-6 pt-2 text-neutral-600 dark:text-neutral-400 text-justify">
        {description}
      </p>
      <Separator className="mb-6" />
    </>
  );
}
