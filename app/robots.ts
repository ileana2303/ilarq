import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/projects-grid/"
    },
    sitemap: "https://www.ilarq.studio/sitemap.xml"
  };
}
