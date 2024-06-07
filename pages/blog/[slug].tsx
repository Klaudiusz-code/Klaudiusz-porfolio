import React from "react";
import { gql } from "@apollo/client";
import createApolloClient from "@/apollo-client";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import styles from './d.module.css';

const BlogPost = ({ post }: any) => {
  if (!post) {
    return <>404 bracie!</>;
  }

  const authorName = `${post.author.node.firstName || ""} ${
    post.author.node.lastName || ""
  }`.trim();
  const formattedDate = new Date(post.date).toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="shadow-sm mx-auto max-w-5xl px-4 py-8 rounded-md font-sans">
      <Head>
        <title>{post.seo.title}</title>
        <meta name="description" content={post.seo.description} />
        {ReactHtmlParser(post.seo.fullHead)}
      </Head>
      <div className={styles.content}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.prose}>
          {ReactHtmlParser(post.content)}
        </div>
        <div className={`${styles.mt8} ${styles.textGray600} ${styles.additionalInfo}`}>
          <p>Published on: {formattedDate}</p>
          {authorName && <p>Author: {authorName}</p>}
          {post.author.node.email && <p>Email: {post.author.node.email}</p>}
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const slug = query.slug;

  const client = createApolloClient();

  const { data } = await client.query({
    query: gql`
      query BlogPost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          title
          content
          date
          author {
            node {
              firstName
              lastName
              email
            }
          }
          seo {
            title
            description
            fullHead
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });

  return {
    props: {
      post: data.post,
    },
  };
};

export default BlogPost;
