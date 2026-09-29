import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const baseUrl = "https://www.ilarq.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: new URL(project.href, baseUrl).href,
    changeFrequency: "yearly",
    priority: 0.8
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/on-site`,
      changeFrequency: "monthly",
      priority: 0.7
    },
    ...projectPages
  ];
}
