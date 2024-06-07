'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

type LatestPostsSectionProps = {
  data: {
    nodes: {
      title: string;
      slug: string;
      date: string;
      excerpt: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      };
    }[];
  };
};

const LatestPostsSection = ({ data }: LatestPostsSectionProps) => {
  return (
    <section className="cnt font-sans mb-12">
      <div className="w-full px-3 flex items-center justify-center flex-col mt-16">
        <h2 className="text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] ">
          <span className="text-customColor font-bold">Moje</span> Blogi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {data.nodes.map((post: any) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="relative  bg-[#fff] rounded-md min-w-[350px] overflow-hidden"
            >
              {post.featuredImage &&
                post.featuredImage.node &&
                post.featuredImage.node.sourceUrl && (
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover"
                  />
                )}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600">
                  {post.excerpt
                    ? post.excerpt.replace(/<[^>]+>/g, "").substring(0, 250) +
                      "..."
                    : "Brak treści..."}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    {new Date(post.date).toLocaleDateString("pl-PL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPostsSection;
