import { MetadataRoute } from "next";
const BASE_URL = "https://vwebit.xyz";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-24");
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/website-development", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/local-seo", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/google-business-profile", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/business-automation", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/packers-movers-website-development", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/transport-company-website", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/contractor-website-development", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/clinic-website-design", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  ];
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
