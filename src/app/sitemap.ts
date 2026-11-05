import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://biniyam.withunion.net",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
