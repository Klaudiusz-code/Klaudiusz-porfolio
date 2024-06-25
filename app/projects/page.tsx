import React from "react";
import { Metadata } from "next";
import { query } from "@/ApolloClient";
import { ProjectsPageQuery, ProjectsPageQueryVariables } from "@/gql/graphql";
import GRAPHQL_QUERY from "@/gql-queries/projects_page.graphql";
import CustomButton from "@/components/CustomButton";

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
      title: "Projekt 1",
      description:
        "Opis projektu 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/images/project1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Projekt 2",
      description:
        "Opis projektu 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/images/project2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Projekt 3",
      description:
        "Opis projektu 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/images/project3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="mb-12">
      <div className="px-6 py-12 lg:p-14">
        <div className="container mx-auto text-center">
          <h1 className="text-[1.7rem] lg:text-[2.8rem] font-[600] tracking-wide text-gray-800">
            {hero?.title}
          </h1>
          <p className="text-gray-600 leading-8 mt-4 mb-6 font-sans font-[400] text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] w-full mx-auto md:max-w-[80%] lg:max-w-[70%] tracking-wide">
            {hero?.description}
          </p>
          <div className="mt-6 text-center">
            <CustomButton
              bgColor="#fff"
              textColor="#0077cc"
              text={hero?.button?.text || ""}
              link={hero?.button?.url || "/"}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProjectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden bg-white shadow-md"
            >
              <img
                src={project.imageUrl}
                alt={`img ${project.id}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-center mb-3">
                  {project.description}
                </p>
                <CustomButton
                  bgColor="#0077cc"
                  textColor="#ffffff"
                  text="Zobacz szczegóły"
                  link={project.link}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
