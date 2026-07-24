import type { ReactNode } from "react";

type JsonLdObject = Record<string, unknown>;

interface JsonLdProps {
  data: JsonLdObject | JsonLdObject[];
}

function getSchemaKey(schema: JsonLdObject, index: number): string {
  if (typeof schema["@id"] === "string") {
    return schema["@id"];
  }

  if (typeof schema["@type"] === "string") {
    return `${schema["@type"]}-${index}`;
  }

  return `json-ld-${index}`;
}

export function JsonLd({ data }: JsonLdProps): ReactNode {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={getSchemaKey(schema, index)}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
