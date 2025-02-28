import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { query } from "@/ApolloClient";
import { ProjectsPageQuery, ProjectsPageQueryVariables } from "@/gql/graphql";
import GRAPHQL_QUERY from "@/gql-queries/projects_page.graphql";
import { FaArrowRight } from "react-icons/fa";

type OpenGraphType = "website" | "article" | "book" | "profile";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await query<ProjectsPageQuery, ProjectsPageQueryVariables>(
      {
        query: GRAPHQL_QUERY,
      }
    );

    const seoData = data.page?.seo;

    return {
      title: seoData?.title || "",
      description: seoData?.description || "",
      openGraph: {
        title: seoData?.openGraph?.title || seoData?.title || "",
        description:
          seoData?.openGraph?.description || seoData?.description || "",
        locale: seoData?.openGraph?.locale || "",
        siteName: seoData?.openGraph?.siteName || "",
        type: (seoData?.openGraph?.type as OpenGraphType) || "website",
      },
      metadataBase: new URL("https://klaudiuszdev.pl"),
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return {
      title: "",
      description: "",
      openGraph: {
        title: "",
        description: "",
        locale: "",
        siteName: "",
        type: "website",
      },
      metadataBase: new URL("https://klaudiuszdev.pl"),
    };
  }
}

const ProjectsPage = async () => {
  const { data } = await query<ProjectsPageQuery, ProjectsPageQueryVariables>({
    query: GRAPHQL_QUERY,
  });
  const hero = data.page?.realisation?.hero;

  const ProjectsData = [
    {
      id: 1,
      title: "Sprawdź Online",
      imageUrl: "/aas.jpg",
      link: "https://fenixtomaszow.pl/",
    },
    {
      id: 2,
      title: "Lavato",
      imageUrl: "/lavatoforkdev.jpg",
      link: "https://www.lavato.eu/",
    },
  ];

  return (
    <section className="py-16 mt-16 lg:mt-20">
      <div className="cnt mx-auto px-4 md:px-8">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-8 font-bold bg-customColor inline-flex p-4 rounded-md shadow-md">
          {hero?.title}
        </h1>
        <p className="text-gray-600 leading-8 mt-4 mb-8 font-sans text-lg md:text-xl lg:text-2xl max-w-2xl">
          {hero?.description}
        </p>
      </div>

      <div className="cnt mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-lg overflow-hidden bg-white shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.imageUrl}
              alt={`Image ${project.id}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
              <Link
                href={project.link}
                passHref
                className="flex items-center justify-center space-x-3 text-white text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="relative">
                  {project.title}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </span>
                <FaArrowRight className="text-xl transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
