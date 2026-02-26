import { query } from "@/ApolloClient";
import { MetadataRoute } from "next";

import { SitemapQuery, SitemapQueryVariables } from "@/gql/graphql";
import SITEMAP_QUERY from "@/gql-queries/sitemap.graphql";

const branzeSlugi = [
  "mechanik",
  "fotografia",
  "autodetailing",
  "ogrodnictwo",
  "kosmetyka",
  "fryzjerstwo",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let items: MetadataRoute.Sitemap = [];

  try {
    const { data } = await query<SitemapQuery, SitemapQueryVariables>({
      query: SITEMAP_QUERY,
    });

    data.pages?.nodes.forEach((page) => {
      if (!page.slug) return; // <- ignorujemy jeśli slug jest null/undefined
      if (branzeSlugi.includes(page.slug)) return; // <- ignorujemy branże

      let priority = 0.8;
      let slug = page.slug;

      if (page.slug === "strona-glowna") {
        priority = 1;
        slug = "";
      }

      items.push({
        url: `https://klaudiuszdev.pl/${slug}`,
        lastModified: page.modified ? new Date(page.modified) : undefined,
        changeFrequency: "always",
        priority,
      });
    });

    data.posts?.nodes.forEach((post) => {
      if (!post.slug) return;
      items.push({
        url: `https://klaudiuszdev.pl/blog/${post.slug}`,
        lastModified: post.modified ? new Date(post.modified) : undefined,
        changeFrequency: "always",
        priority: 0.8,
      });
    });
  } catch (error) {
    console.error(error);
  }

  return items;
}
