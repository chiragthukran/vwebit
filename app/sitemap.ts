import { MetadataRoute } from "next";

const BASE_URL = "https://vwebit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/website-development", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/local-seo", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/google-business-profile", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/business-automation", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/website-audit", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/packers-movers-website-development", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/transport-company-website", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/contractor-website-development", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/clinic-website-design", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
