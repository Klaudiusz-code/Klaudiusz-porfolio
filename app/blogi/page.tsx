import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { query } from "@/ApolloClient";
import { BlogPostsQuery } from "@/gql/graphql";
import BLOG_POSTS_QUERY from "@/gql-queries/blog_posts.graphql";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Blog o Tworzeniu Stron, SEO i Web Developmencie | Tomaszów Lubelski, Zamość, Biłgoraj",
    description:
      "Przeczytaj najnowsze poradniki i artykuły o tworzeniu stron internetowych, SEO i web developmentzie. Skierowane do firm i osób z Tomaszowa Lubelskiego, Zamościa, Biłgoraja i okolic.",
    openGraph: {
      title:
        "Blog o Tworzeniu Stron, SEO i Web Developmencie | Tomaszów Lubelski, Zamość, Biłgoraj",
      description:
        "Najnowsze artykuły o tworzeniu stron, SEO i web developmencie dla lokalnych firm i osób z Tomaszowa Lubelskiego, Zamościa, Biłgoraja.",
      type: "website",
      siteName: "klaudiuszdev.pl",
      url: "https://klaudiuszdev.pl/blog",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Blog o Tworzeniu Stron, SEO i Web Developmencie | Tomaszów Lubelski, Zamość, Biłgoraj",
      description:
        "Przeczytaj najnowsze artykuły o tworzeniu stron internetowych, SEO i web developmentzie.",
      site: "@klaudiuszdev",
      creator: "@klaudiuszdev",
    },
  };
}

const BlogPage = async () => {
  const { data } = await query<BlogPostsQuery>({
    query: BLOG_POSTS_QUERY,
  });

  const posts = data?.posts?.nodes || [];

  return (
    <section className="mt-16 lg:mt-20">
      <div className="cnt mx-auto py-20 px-4 md:px-8">
        <h2 className="text-white lg:text-4xl inline-flex mb-8 font-bold bg-customColor p-4 rounded-md ">
          Poradniki i Artykuły
        </h2>
        <div className="cnt mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post: any) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {post.featuredImage?.node?.sourceUrl && (
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {post.excerpt
                    ? post.excerpt.replace(/<[^>]+>/g, "").substring(0, 180) +
                      "..."
                    : "Brak treści..."}
                </p>
                <span className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString("pl-PL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
