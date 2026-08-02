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
      url: `${SITE_URL}/oferta`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/pakiet-dla-firm`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/kontakt`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/formularz-briefu`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  let blogPosts: MetadataRoute.Sitemap = [];

  try {
    const { data } = await query<SitemapQuery, SitemapQueryVariables>({
      query: SITEMAP_QUERY,
    });

    data.posts?.nodes.forEach((post) => {
      if (!post.slug) return;

      blogPosts.push({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  } catch (error) {
    console.error("Sitemap error:", error);
  }

  return [...staticPages, ...blogPosts];
}
