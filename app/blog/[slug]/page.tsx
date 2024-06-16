import React from "react";
import { Metadata } from "next";
import ReactHtmlParser from "html-react-parser";

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
    title: data.post.seo?.title,
    description: data.post.seo?.description,
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

  return (
    <section className="shadow-sm mx-auto max-w-5xl px-4 py-8 rounded-md font-sans">
      <div className={styles.content}>
        <h1 className={styles.title}>{data.post.title}</h1>
        <div className={styles.prose}>
          {ReactHtmlParser(data.post.content || '')}

        </div>
        <div className={`${styles.mt8} ${styles.textGray600} ${styles.additionalInfo}`}>
          <p>Published on: {formattedDate}</p>
          {authorName && <p>Author: {authorName}</p>}
          {data.post.author?.node.email && <p>Email: {data.post.author.node.email}</p>}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;

