import React from "react";
import Link from "next/link";
import { query } from "@/ApolloClient";
import { BlogPostsQuery } from "@/gql/graphql";
import GRAPHQL_QUERY from "@/gql-queries/blog_posts.graphql";
import { HiOutlineArrowRight } from "react-icons/hi";

interface BlogSidebarProps {
  currentSlug: string;
}

const BlogSidebar = async ({ currentSlug }: BlogSidebarProps) => {
  const { data } = await query<BlogPostsQuery>({ query: GRAPHQL_QUERY });

  const filteredPosts =
    data?.posts?.nodes?.filter(
      (post) => post.slug && post.slug !== currentSlug
    ) || [];

  // Wyświetlamy tylko 3 ostatnie artykuły
  const recentPosts = filteredPosts.slice(0, 3);

  return (
    <aside className="w-full mt-8 p-6 bg-white rounded-lg shadow-md border-2 border-red-500">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Ostatnio dodane
      </h3>
      <ul className="space-y-4">
        {recentPosts.map((post) => (
          <li
            key={post.slug}
            className="relative group cursor-pointer transition-all duration-200 transform hover:scale-105 hover:shadow-md hover:bg-gray-50 p-4 rounded-lg"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-base text-gray-900 font-medium group-hover:text-blue-600 transition-colors duration-300 flex items-center space-x-3"
            >
              <HiOutlineArrowRight className="text-gray-500 group-hover:text-blue-600" />
              <span>{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BlogSidebar;
