import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain =
    process.env.NEXT_PUBLIC_DOMAIN || "https://abdurrozaqf.vercel.app/";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
