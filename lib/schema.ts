const BASE_URL = "https://www.vwebit.xyz";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
  "@id": `${BASE_URL}/#organization`,
  name: "Vwebit",
  url: BASE_URL,
  email: "vwebit12@gmail.com",
  telephone: "+91 85710 17947",
  foundingLocation: "Jalandhar, Punjab, India",
  description:
    "Website development, local SEO, Google Business Profile optimization and business automation services for Indian SMEs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jalandhar",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 85710 17947",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Punjabi"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Vwebit",
  description:
    "Professional website development, local SEO, and Google Business Profile optimization for Indian SMEs.",
  publisher: { "@id": `${BASE_URL}/#organization` },
};

export function webPageSchema(
  title: string,
  description: string,
  path: string,
  type: string = "WebPage"
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${BASE_URL}${path}#webpage`,
    url: `${BASE_URL}${path}`,
    name: title,
    description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
}

export function serviceSchema(
  name: string,
  description: string,
  path: string,
  priceRange?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${BASE_URL}/#organization` },
    url: `${BASE_URL}${path}`,
    areaServed: { "@type": "Country", name: "India" },
    ...(priceRange && {
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceSpecification: {
          "@type": "PriceSpecification",
          description: priceRange,
        },
      },
    }),
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export function itemListSchema(
  name: string,
  items: { name: string; description: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      url: item.url,
    })),
  };
}
