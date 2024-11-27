import React from "react";
import { Metadata } from "next";
import ReactHtmlParser from "html-react-parser";
import Head from 'next/head';

import styles from './page.module.css';

import { query } from "@/ApolloClient";

import { BlogPostQuery, BlogPostQueryVariables } from "@/gql/graphql";
import GRAPHQL_QUERY from "@/gql-queries/blog_post.graphql";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { data } = await query<BlogPostQuery, BlogPostQueryVariables>({
    query: GRAPHQL_QUERY,
    variables: {
      slug: params.slug,
    }
  });

  if (!data.post) {
    return {
      title: "404 Not Found",
      description: "This blog post does not exist!",
    };
  }

  return {
    title: data.post.seo?.title || "Default Title",
    description: data.post.seo?.description || "Default Description",
  }
}

const BlogPost = async ({ params }: any) => {
  const { data } = await query<BlogPostQuery, BlogPostQueryVariables>({ query: GRAPHQL_QUERY, variables: { slug: params.slug } });

  if (!data.post) {
    return <div>404 Not Found</div>;
  }

  const authorName = `${data.post.author?.node.firstName || ""} ${data.post.author?.node.lastName || ""}`.trim();
  const formattedDate = new Date(data.post.date || '').toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://klaudiuszdev.pl/blog/${params.slug}`
    },
    "headline": data.post.title || "",
    "description": data.post.seo?.description || "",
    "datePublished": data.post.date || "",
    "author": {
      "@type": "Person",
      "name": authorName,
      "email": data.post.author?.node.email || ""
    }
  };

  return (
    <section className={`shadow-sm mt-16 lg:mt-14 mx-auto max-w-5xl px-4 py-8 rounded-md font-sans  ${styles.content}`}>
      <Head>
        <title>{data.post.seo?.title || "Default Title"}</title>
        <meta name="description" content={data.post.seo?.description || "Default Description"} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <div className={styles.content}>
        <h1 className={styles.title}>{data.post.title}</h1>
        <div className={styles.prose}>
          {ReactHtmlParser(data.post.content || '')}
        </div>
        <div className={`${styles.mt8} ${styles.textGray600} ${styles.additionalInfo}`}>
          <p>Dodano: {formattedDate}</p>
          {authorName && <p>Autor: {authorName}</p>}
          {data.post.author?.node.email && <p>Email: {data.post.author.node.email}</p>}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
