import React from "react";
import { Metadata } from "next";
import ReactHtmlParser from "html-react-parser";
import Image from "next/image";
import Head from "next/head";

import styles from "./page.module.css";
import BlogSidebar from "@/components/BlogSidebar";
import { query } from "@/ApolloClient";

import { BlogPostQuery, BlogPostQueryVariables } from "@/gql/graphql";
import GRAPHQL_QUERY from "@/gql-queries/blog_post.graphql";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { data } = await query<BlogPostQuery, BlogPostQueryVariables>({
    query: GRAPHQL_QUERY,
    variables: {
      slug: params.slug,
    },
  });

  if (!data.post) {
    return {
      title: "Post nie znaleziony - 404",
      description:
        "Przepraszamy, nie znaleźliśmy tego wpisu na blogu. Może został usunięty lub nigdy nie istniał.",
    };
  }

  return {
    title: data.post.seo?.title || "Default Title",
    description: data.post.seo?.description || "Default Description",
  };
}

const BlogPost = async ({ params }: any) => {
  const { data } = await query<BlogPostQuery, BlogPostQueryVariables>({
    query: GRAPHQL_QUERY,
    variables: { slug: params.slug },
  });

  if (!data.post) {
    return (
      <div className="text-center p-24">
        <h1 className="text-2xl font-semibold text-gray-800">
          404 - Post Nie Znaleziony
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Przepraszamy, nie znaleźliśmy tego wpisu na blogu. Może został
          usunięty lub nigdy nie istniał.
        </p>
      </div>
    );
  }

  const authorName = `${data.post.author?.node.firstName || ""} ${
    data.post.author?.node.lastName || ""
  }`.trim();
  const formattedDate = new Date(data.post.date || "").toLocaleDateString(
    "pl-PL",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://klaudiuszdev.pl/blog/${params.slug}`,
    },
    headline: data.post.title || "",
    description: data.post.seo?.description || "",
    datePublished: data.post.date || "",
    author: {
      "@type": "Person",
      name: authorName,
      email: data.post.author?.node.email || "",
    },
  };

  return (
    <section
      className={`shadow-sm mt-16 lg:mt-14 mx-auto w-full  py-8 rounded-md font-sans`}
    >
      <Head>
        <title>{data.post.seo?.title || "Tytuł Bloga"}</title>
        <meta
          name="description"
          content={data.post.seo?.description || "Opis Bloga"}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <header className="relative w-full h-[350px] lg:h-[400px] bg-cover bg-center flex mt-6 items-center justify-center">
        <div className="absolute inset-0 bg-blue-900 opacity-50 z-10"></div>

        <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('/photoforblog.jpg')]"></div>

        <div className="cnt relative z-20 text-center px-4">
          <h1 className="text-2xl lg:text-5xl font-bold text-white drop-shadow-lg">
            {data.post.title}
          </h1>
          <div
            className={`${styles.mt8} ${styles.textWhite} ${styles.additionalInfo}`}
          >
            <p>Dodano: {formattedDate}</p>
            {authorName && <p>Autor: {authorName}</p>}
            {data.post.author?.node.email && (
              <p>Email: {data.post.author.node.email}</p>
            )}
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.prose}>
          {ReactHtmlParser(data.post.content || "")}
        </div>

        <BlogSidebar currentSlug={params.slug} />
      </div>
    </section>
  );
};

export default BlogPost;
