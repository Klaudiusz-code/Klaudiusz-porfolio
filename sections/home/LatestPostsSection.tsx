"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type LatestPostsSectionProps = {
  posts: {
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

const LatestPostsSection = ({ posts }: LatestPostsSectionProps) => {
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-[#6e92f2]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        
       <div className="mb-16 text-left">
          <span className="inline-block py-1 px-3 rounded bg-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            Blog
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Ostatnie Artykuły
          </h2>
          <div className="w-24 h-2 bg-[#6e92f2]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {latestPosts.map((post: any, index) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group relative h-full flex flex-col"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#6e92f2] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6e92f2]/10">
                
                <div className="absolute top-6 left-6 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 flex items-center justify-center shadow-sm">
                  <span className="text-xs font-bold text-slate-900 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative w-full h-72 bg-slate-100 overflow-hidden">
                  {post.featuredImage &&
                  post.featuredImage.node &&
                  post.featuredImage.node.sourceUrl ? (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-4xl font-bold">
                      {index + 1}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6e92f2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-[1px] w-8 bg-[#6e92f2] group-hover:w-12 transition-all duration-300"></div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {new Date(post.date).toLocaleDateString("pl-PL", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                      }).replace(/\//g, '.')}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight group-hover:text-[#6e92f2] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed text-sm mb-6 flex-1 line-clamp-3">
                    {post.excerpt
                      ? post.excerpt.replace(/<[^>]+>/g, "").substring(0, 120) + "..."
                      : "Kliknij, aby przeczytać pełny artykuł..."}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between group-hover:border-[#6e92f2]/20 transition-colors">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest group-hover:text-[#6e92f2]">
                      Czytaj
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-[#6e92f2] group-hover:text-white transition-all duration-300">
                      <GoArrowUpRight className="text-sm" />
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#6e92f2] rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl"></div>
          <Link
            href="/blogi"
            className="relative flex items-center justify-between border-2 border-slate-900 bg-white rounded-3xl p-8 md:p-12 transition-all duration-300 hover:bg-[#6e92f2] hover:border-[#6e92f2] group-hover:shadow-2xl group-hover:shadow-[#6e92f2]/40"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 group-hover:text-blue-100 uppercase tracking-widest mb-2">
                Archiwum
              </span>
              <span className="text-3xl md:text-4xl font-black text-slate-900 group-hover:text-white tracking-tight leading-none">
                Wszystkie artykuły
              </span>
            </div>

            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-white group-hover:text-[#6e92f2] transition-all duration-300">
              <GoArrowUpRight className="text-2xl md:text-3xl group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestPostsSection;