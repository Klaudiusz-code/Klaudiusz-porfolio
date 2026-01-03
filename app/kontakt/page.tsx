import Link from "next/link";
import { Metadata } from "next";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaFacebookMessenger, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ContactForm } from "@/components/ContactForm"; 
import { query } from "@/ApolloClient";
import { ContactQueryQuery, ContactQueryQueryVariables } from "@/gql/graphql";
import GRAPHQL_QUERY from "@/gql-queries/contact_page.graphql";

const iconsKeyMap: Record<string, React.ElementType> = {
  IoCallOutline,
  IoMailOutline,
  FaFacebookMessenger,
  FaInstagram,
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
  const heroDescription = page?.contact?.hero?.descritpion || "Skontaktuj się z nami";

  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          <div className="flex flex-col justify-center h-full space-y-12">
            
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[0.95]">
                {heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light max-w-lg">
                {heroDescription}
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((item, index) => {
                const iconKey = item?.icon?.split(":")[0] ?? null;
                return (
                  <Link
                    key={index}
                    href={item?.url || "#"}
                    className="group flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-[#6e92f2]/30 hover:bg-[#6e92f2]/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      {/* Ikona w kółku */}
                      <div className="w-14 h-14 rounded-full bg-blue-50 text-customColor flex items-center justify-center text-2xl group-hover:bg-[#6e92f2] group-hover:text-white transition-colors duration-300 shadow-sm">
                        {iconKey && getIconByString(iconKey)}
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                          {item?.titleTwo || "Typ"}
                        </span>
                        <span className="text-lg font-bold text-slate-900 group-hover:text-customColor transition-colors">
                          {item?.title || "Wartość"}
                        </span>
                      </div>
                    </div>
                    
                    <span className="text-slate-300 group-hover:text-customColor transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                );
              })}
            </div>

            {additionalLinks.length > 0 && (
              <div className="pt-8 border-t border-slate-100">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                  Znajdź mnie
                </span>
                <div className="flex gap-4">
                  {additionalLinks.map((item, index) => {
                    const iconKey = item?.icon?.split(":")[0] ?? null;
                    return (
                      <Link
                        key={index}
                        href={item?.url || "#"}
                        className="w-12 h-12 rounded-full border border-slate-200 text-customColor flex items-center justify-center hover:bg-customColor hover:text-white hover:shadow-lg hover:shadow-[#6e92f2]/40 hover:-translate-y-1 transition-all duration-300"
                      >
                        <span className="text-xl">
                          {iconKey && getIconByString(iconKey)}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          <div className="relative">
            <div className="sticky top-8">
               <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                
                <div className="mb-8 pb-8 border-b border-slate-200/60">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Napisz do mnie
                  </h3>
                  <p className="text-sm text-slate-500">
                    Odpowiadam zazwyczaj w ciągu 24h.
                  </p>
                </div>

    
                <ContactForm />
              
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;