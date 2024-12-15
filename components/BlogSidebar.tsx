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

  return (
    <aside className="w-full mt-14 p-6 bg-white rounded-lg shadow-2xl border-2 border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Zobacz inne artykuły
      </h3>
      <ul className="space-y-6">
        {filteredPosts.map((post) => (
          <li
            key={post.slug}
            className="relative group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 p-4 rounded-lg"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-base md:text-lg lg:text-lg text-gray-900 font-medium group-hover:text-blue-600 transition-colors duration-300 flex items-center space-x-3"
            >
              <HiOutlineArrowRight className="text-gray-400 group-hover:text-blue-600" />
              <span>{post.title}</span>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BlogSidebar;
