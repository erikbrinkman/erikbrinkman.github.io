import type { MetadataRoute } from "next";
import { siteUrl } from "../utils/site";

// required for `output: "export"`
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
