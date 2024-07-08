import { query } from "@/ApolloClient";
import { MetadataRoute } from "next";

import { SitemapQuery, SitemapQueryVariables } from "@/gql/graphql";
import SITEMAP_QUERY from "@/gql-queries/sitemap.graphql";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let items: MetadataRoute.Sitemap = [];
    
    try {
        const { data } = await query<SitemapQuery, SitemapQueryVariables>(
          {
            query: SITEMAP_QUERY,
          }
        );

        data.pages?.nodes.forEach(page => {
            let priority = 80;
            let slug = page.slug;

            if (page.slug === 'strona-glowna') {
                priority = 100;
                slug = '';
            }

            items.push({
                url: `https://klaudiuszdev.pl/${slug}`,
                lastModified: new Date(page.modified || ''),
                changeFrequency: 'always',
                priority,
            });
        });

        data.posts?.nodes.forEach(post => {
            items.push({
                url: `https://klaudiuszdev.pl/blog/${post.slug}`,
                lastModified: new Date(post.modified || ''),
                changeFrequency: 'always',
                priority: 80,
            });
        });
    } catch (error) {
        console.error(error);
    }

    return items;
}
