import React from "react";
import Image from "next/image";
import BlogImage from "@/public/blog_test_img.jpg";
const blogPosts = [
  {
    id: 1,
    title: "Tytuł pierwszego posta",
    content: "Treść pierwszego posta...",
    date: "27 Lutego 2024",
  },
  {
    id: 2,
    title: "Tytuł drugiego posta",
    content: "Treść drugiego posta...",
    date: "27 Lutego 2024",
  },
  {
    id: 3,
    title: "Tytuł trzeciego posta",
    content: "Treść trzeciego posta...",
    date: "27 Lutego 2024",
  },
];
const Blog = () => {
  return (
    <section className="cnt font-sans mb-12">
      <div className="w-full px-3 flex items-center justify-center flex-col mt-16">
        <h2 className="text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] ">
          <span className="text-customColor font-bold">Moje</span> Blogi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="relative border border-slate-100 rounded-md min-w-[350px] overflow-hidden"
            >
              <Image
                src={BlogImage}
                alt="obrazek blogowy"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.content}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-slate-100 bg-customColor rounded-xl text-sm px-2 py-1 font-bold">
                    Czytaj Więcej
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
