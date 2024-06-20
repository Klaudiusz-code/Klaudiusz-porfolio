import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaFacebookMessenger, FaDiscord, FaLinkedin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { query } from "@/ApolloClient";
import { ContactQueryQuery, ContactQueryQueryVariables } from "@/gql/graphql";
import GRAPHQL_QUERY from "@/gql-queries/contact_page.graphql";

const iconsKeyMap: Record<string, React.ElementType> = {
  IoCallOutline: IoCallOutline,
  IoMailOutline: IoMailOutline,
  FaFacebookMessenger: FaFacebookMessenger,
  FaDiscord: FaDiscord,
  FaLinkedin: FaLinkedin,
};

const getIconByString = (iconKey: string) => {
  const IconComponent = iconsKeyMap[iconKey];
  return IconComponent ? <IconComponent /> : null;
};

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await query<ContactQueryQuery, ContactQueryQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const seoData = data.page?.seo;

  return {
    title: seoData?.title || "Tytuł",
    description: seoData?.description || "Podtytuł",
  };
}

const ContactPage = async () => {
  const { data } = await query<ContactQueryQuery, ContactQueryQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const { page } = data || {};
  const contactMethods = page?.contact?.contactMethods || [];
  const additionalLinks = page?.contact?.iconsContact || [];
  const heroTitle = page?.contact?.hero?.title || "Kontakt";
  const heroDescription =
    page?.contact?.hero?.descritpion ||
    "abc";

  return (
    <section>
      <Head>
        <title>{page?.seo?.title || "Kontakt"}</title>
      </Head>
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto py-12">
        <div className="cnt p-10 rounded-lg grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 mb-24 bg-white shadow-lg">
          <div className="lg:ml-10 w-full flex flex-col justify-center items-start">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-source mb-4 text-customColor leading-tight tracking-wide">
              {heroTitle}
            </h2>
            <p className="text-lg lg:text-lg mb-8 mt-4 leading-7 text-[#5b66a0]">
              {heroDescription}
            </p>
            {contactMethods.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto sm:mx-0">
                {contactMethods.map((item, index) => {
                  const iconKey = item?.icon?.split(":")[0] ?? null;
                  return (
                    <div
                      key={index}
                      className="border border-customColor group p-6 rounded-xl flex items-center justify-center flex-col cursor-pointer transition-all duration-300 hover:bg-[#e1e7ff] hover:border-[#3b46a8] hover:scale-105"
                    >
                      <div className="rounded-full bg-[#f0f4ff] p-4 mb-4 group-hover:scale-75 transition-transform duration-300">
                        <span className="text-customColor text-4xl">
                          {iconKey && getIconByString(iconKey)}
                        </span>
                      </div>
                      <span className="text-[#3b46a8] font-[400] font-source">{item?.titleTwo}</span>

                      <div className="text-center mt-2">
                        <Link
                          href={item?.url || "#"}
                          className="text-lg lg:text-xl font-medium transition-all duration-200 hover:text-customColor"
                        >
                          <span className="text-slate-600">
                            {item?.title || "ABC"}
                          </span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {additionalLinks.length > 0 && (
              <div className="mt-8 flex gap-x-6 mx-auto md:mx-0">
                {additionalLinks.map((item, index) => {
                  const iconKey = item?.icon?.split(":")[0] ?? null;
                  return (
                    <div
                      key={index}
                      className="border border-customColor p-3 rounded-xl transition-all  hover:border-[#3b46a8]"
                    >
                      <Link
                        href={item?.url || "#"}
                        className="text-4xl text-customColor hover:scale-110 transition-all duration-400"
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
