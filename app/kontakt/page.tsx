import Link from "next/link";
import { Metadata } from "next";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaFacebookMessenger, FaDiscord, FaLinkedin } from "react-icons/fa";
import { ContactForm } from "@/components/ContactForm";
import { query } from "@/ApolloClient";
import { ContactQueryQuery, ContactQueryQueryVariables } from "@/gql/graphql";
import GRAPHQL_QUERY from "@/gql-queries/contact_page.graphql";

const iconsKeyMap: Record<string, React.ElementType> = {
  IoCallOutline,
  IoMailOutline,
  FaFacebookMessenger,
  FaDiscord,
  FaLinkedin,
};

const getIconByString = (iconKey: string) => {
  const IconComponent = iconsKeyMap[iconKey];
  return IconComponent ? <IconComponent /> : null;
};

type OpenGraphType = "website" | "article" | "book" | "profile";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await query<ContactQueryQuery, ContactQueryQueryVariables>(
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

const ContactPage = async () => {
  const { data } = await query<ContactQueryQuery, ContactQueryQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const { page } = data || {};
  const contactMethods = page?.contact?.contactMethods || [];
  const additionalLinks = page?.contact?.iconsContact || [];
  const heroTitle = page?.contact?.hero?.title || "Kontakt";
  const heroDescription = page?.contact?.hero?.descritpion || "abc";

  return (
    <section className="mt-16 lg:mt-20">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto py-12">
        <div className="cnt p-6 sm:p-10 rounded-lg grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 mb-24 bg-white shadow-lg">
          <div className="w-full flex flex-col justify-center items-start text-center md:text-left ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans mb-4 text-customColor leading-tight tracking-wide">
              {heroTitle}
            </h2>
            <p className="text-base lg:text-lg mb-8 mt-4 leading-7 text-[#5b66a0]">
              {heroDescription}
            </p>
            {contactMethods.length > 0 && (
              <div className="flex flex-col  gap-1">
                {contactMethods.map((item, index) => {
                  const iconKey = item?.icon?.split(":")[0] ?? null;
                  return (
                    <Link
                      key={index}
                      href={item?.url || "#"}
                      className="flex flex-col rounded-md border-transparent  group p-2  transition-all duration-300 hover:bg-[#e1e7ff] hover:border-[#3b46a8] hover:scale-105"
                    >
                      <div className=" text-left py-1 mb-2  transition-transform duration-300">
                        <span className="text-customColor text-3xl md:text-2xl lg:text-2xl">
                          {iconKey && getIconByString(iconKey)}
                        </span>
                      </div>
                      <span className="text-[#3b46a8] font-[400] font-source text-left text-base md:text-sm lg:text-base">
                        {item?.titleTwo}
                      </span>
                      <div className="text-left mt-1">
                        <span className="text-slate-500 text-lg md:text-base lg:text-lg font-light transition-all duration-200 ">
                          {item?.title || "ABC"}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {additionalLinks.length > 0 && (
              <div className="mt-6 flex gap-x-4 mx-auto md:mx-0">
                {additionalLinks.map((item, index) => {
                  const iconKey = item?.icon?.split(":")[0] ?? null;
                  return (
                    <div
                      key={index}
                      className="border p-3 rounded-xl transition-all hover:border-[#3b46a8]"
                    >
                      <Link
                        href={item?.url || "#"}
                        className="text-3xl text-customColor hover:scale-110 transition-all duration-400"
                      >
                        {iconKey && getIconByString(iconKey)}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
