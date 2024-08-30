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
      title: "Projekt w budowie",
      description: "Ten projekt jest w przygotowaniu. Sprawdź wkrótce!",
      imageUrl: "/p.svg",
      link: "#",
    },
  ];

  return (
    <section className="mt-16 py-12 lg:mt-16">
      <div className="cnt mx-auto py-20 px-1 md:px-2">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-8 font-bold bg-customColor inline-flex p-4 rounded-md">
          {hero?.title}
        </h1>
        <p className="text-gray-700 leading-8 mt-4 mb-8 font-sans text-lg md:text-xl lg:text-2xl max-w-2xl">
          {hero?.description}
        </p>
      </div>

      <div className="cnt mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProjectsData.map((project) => (
          <div
            key={project.id}
            className="rounded-lg overflow-hidden bg-white shadow-md"
          >
            <img
              src={project.imageUrl}
              alt={`Image ${project.id}`}
              className="w-full h-60 object-contain rounded-t-lg"
            />
            <div className="p-6 flex flex-col justify-center items-center">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 text-center">
                {project.title}
              </h2>
              <p className="text-gray-700 text-center mb-4">
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
    </section>
  );
};

export default ProjectsPage;
