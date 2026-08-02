import React from "react";
import { Metadata } from "next";
import Link from "next/link";

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

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Kontakt | KlaudiuszDev.pl – Strony Internetowe i Sklepy WooCommerce";

  const description =
    "Skontaktuj się z KlaudiuszDev.pl. Tworzę nowoczesne strony internetowe, sklepy WooCommerce i aplikacje webowe dla firm. Otrzymaj indywidualną wycenę projektu.";

  return {
    title,

    description,

    metadataBase: new URL("https://klaudiuszdev.pl"),

    alternates: {
      canonical: "/kontakt",
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,

      description,

      url: "https://klaudiuszdev.pl/kontakt",

      siteName: "KlaudiuszDev.pl",

      locale: "pl_PL",

      type: "website",
    },
  };
}

const ContactPage = async () => {
  const { data } = await query<ContactQueryQuery, ContactQueryQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const page = data.page;

  const contactMethods = page?.contact?.contactMethods || [];

  const additionalLinks = page?.contact?.iconsContact || [];

  const heroTitle = page?.contact?.hero?.title || "Skontaktuj się ze mną";

  const heroDescription =
    page?.contact?.hero?.descritpion ||
    "Masz pomysł na stronę internetową, sklep WooCommerce lub aplikację webową? Napisz, a przygotuję rozwiązanie dopasowane do Twojej firmy.";

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
                      <div className="w-14 h-14 rounded-full bg-blue-50 text-customColor flex items-center justify-center text-2xl group-hover:bg-[#6e92f2] group-hover:text-white transition-colors duration-300 shadow-sm">
                        {iconKey && getIconByString(iconKey)}
                      </div>

                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                          {item?.titleTwo || "Kontakt"}
                        </span>

                        <span className="text-lg font-bold text-slate-900">
                          {item?.title || ""}
                        </span>
                      </div>
                    </div>

                    <span className="text-slate-300">→</span>
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
                        className="w-12 h-12 rounded-full border border-slate-200 text-customColor flex items-center justify-center hover:bg-customColor hover:text-white transition-all"
                      >
                        {iconKey && getIconByString(iconKey)}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl">
                <div className="mb-8 pb-8 border-b border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Napisz do mnie
                  </h2>

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
