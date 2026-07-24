import { METADATA, SITE_URL } from "@/constants/metadata";

export const SCHEMA_IDS = {
  person: `${SITE_URL}#person`,
  website: `${SITE_URL}#website`,
  profilePage: `${SITE_URL}/#profilepage`,
} as const;

type JsonLdObject = Record<string, unknown>;

export function buildPersonSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": SCHEMA_IDS.person,
    name: METADATA.authors.name,
    givenName: "Abdur Rozaq",
    familyName: "Fakhruddin",
    alternateName: [METADATA.shortTitle, "abdurrozaqf"],
    jobTitle: "Front-End Engineer",
    description: METADATA.description,
    url: SITE_URL,
    email: METADATA.authors.email,
    image: METADATA.openGraph.images.url,
    knowsAbout: [
      "Front-End Development",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web Performance",
      "UI Engineering",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Indonesia",
    },
    sameAs: [
      "https://github.com/abdurrozaqf",
      "https://www.linkedin.com/in/abdurrozaqfakhruddin/",
      "https://twitter.com/abdurrozaqf_",
    ],
  };
}

export function buildWebsiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    name: METADATA.openGraph.siteName,
    alternateName: "Abdur Rozaq Fakhruddin Portfolio",
    url: SITE_URL,
    description: METADATA.description,
    inLanguage: "en",
    publisher: { "@id": SCHEMA_IDS.person },
    author: { "@id": SCHEMA_IDS.person },
  };
}

export function buildProfilePageSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": SCHEMA_IDS.profilePage,
    url: SITE_URL,
    name: METADATA.title,
    description: METADATA.description,
    inLanguage: "en",
    isPartOf: { "@id": SCHEMA_IDS.website },
    mainEntity: { "@id": SCHEMA_IDS.person },
  };
}

export function buildSiteSchemas(): JsonLdObject[] {
  return [buildPersonSchema(), buildWebsiteSchema()];
}

interface SoftwareSourceCodeInput {
  name: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  topics: string[];
  createdAt: string;
  updatedAt: string;
  path: string;
}

export function buildSoftwareSourceCodeSchema(
  input: SoftwareSourceCodeInput
): JsonLdObject {
  const pageUrl = `${SITE_URL}${input.path}`;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: input.name,
    description:
      input.description ||
      `${input.name} — project by ${METADATA.authors.name}.`,
    url: pageUrl,
    codeRepository: input.htmlUrl,
    programmingLanguage: input.language || undefined,
    keywords: input.topics.length > 0 ? input.topics.join(", ") : undefined,
    dateCreated: input.createdAt,
    dateModified: input.updatedAt,
    author: { "@id": SCHEMA_IDS.person },
    creator: { "@id": SCHEMA_IDS.person },
  };
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildProjectSchemas(
  input: SoftwareSourceCodeInput
): JsonLdObject[] {
  return [
    buildSoftwareSourceCodeSchema(input),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: input.name, path: input.path },
    ]),
  ];
}
