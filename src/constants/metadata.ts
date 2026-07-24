import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_DOMAIN || "https://codur.dev";

const SITE_DESCRIPTION =
  "Front-End Engineer specializing in Next.js, React, and TypeScript. Explore the portfolio of Abdur Rozaq Fakhruddin — high-performance web interfaces, based in Indonesia.";

const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og-picture.png`,
  width: 1200,
  height: 630,
  alt: "Abdur Rozaq Fakhruddin — Front-End Engineer",
} as const;

export const METADATA = {
  title: "Abdur Rozaq Fakhruddin | Front-End Engineer",
  shortTitle: "Abdur Rozaq F",
  authors: {
    name: "Abdur Rozaq Fakhruddin",
    url: SITE_URL,
    role: "Front-end Engineer",
    email: "rozaqa27@gmail.com",
  },
  creator: "Abdur Rozaq F",
  description: SITE_DESCRIPTION,
  keyword: [
    "Abdur Rozaq Fakhruddin",
    "Front-End Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Developer Indonesia",
    "Software Engineer",
    "Portfolio",
    "codur.dev",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    title: "Abdur Rozaq Fakhruddin | Front-End Engineer",
    siteName: "codur.dev",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    images: DEFAULT_OG_IMAGE,
  },
  twitter: {
    creator: "@abdurrozaqf_",
  },
  siteUrl: SITE_URL,
  manifest: "/manifest.webmanifest",
};

interface PageImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface BuildPageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: PageImage;
  type?: "website" | "article" | "profile";
  noIndex?: boolean;
}

function toSocialTitle(title: string): string {
  if (title === METADATA.title || title.includes(METADATA.shortTitle)) {
    return title;
  }

  return `${title} | ${METADATA.shortTitle}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? METADATA.openGraph.images;
  const socialTitle = toSocialTitle(title);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title: socialTitle,
      description,
      locale: METADATA.openGraph.locale,
      siteName: METADATA.openGraph.siteName,
      images: [
        {
          url: ogImage.url,
          width: ogImage.width ?? DEFAULT_OG_IMAGE.width,
          height: ogImage.height ?? DEFAULT_OG_IMAGE.height,
          alt: ogImage.alt ?? socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
      creator: METADATA.twitter.creator,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
