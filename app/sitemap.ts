import { MetadataRoute } from "next";
import { query } from "@/ApolloClient";

import { SitemapQuery, SitemapQueryVariables } from "@/gql/graphql";

import SITEMAP_QUERY from "@/gql-queries/sitemap.graphql";

const SITE_URL = "https://klaudiuszdev.pl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${SITE_URL}/strony-i-sklepy-internetowe`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${SITE_URL}/zaistniej-w-sieci`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/realizacje`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    {
      url: `${SITE_URL}/kontakt`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    {
      url: `${SITE_URL}/formularz-briefu`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  let wordpressPages: MetadataRoute.Sitemap = [];

  let blogPosts: MetadataRoute.Sitemap = [];

  try {
    const { data } = await query<SitemapQuery, SitemapQueryVariables>({
      query: SITEMAP_QUERY,
    });

    // strony z WordPressa
    data.pages?.nodes.forEach((page) => {
      if (!page.slug) return;

      const ignoredPages = [
        "strona-glowna",
        "kontakt",
        "realizacje",
        "strony-i-sklepy-internetowe",
        "zaistniej-w-sieci",
      ];

      if (ignoredPages.includes(page.slug)) {
        return;
      }

      wordpressPages.push({
        url: `${SITE_URL}/${page.slug}`,

        lastModified: currentDate,

        changeFrequency: "monthly",

        priority: 0.6,
      });
    });

    // blog
    data.posts?.nodes.forEach((post) => {
      if (!post.slug) return;

      blogPosts.push({
        url: `${SITE_URL}/blog/${post.slug}`,

        lastModified: currentDate,

        changeFrequency: "monthly",

        priority: 0.5,
      });
    });
  } catch (error) {
    console.error("Sitemap error:", error);
  }

  return [...staticPages, ...wordpressPages, ...blogPosts];
}
