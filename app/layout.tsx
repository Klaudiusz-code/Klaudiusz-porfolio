import createApolloClient from "@/apollo-client";
import { gql } from "@apollo/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const getData = async () => {
  const client = createApolloClient();

  const menus = await client.query({
    query: gql`
      query Menus {
        menus {
          nodes {
            footer {
              email
              text
              phone
            }
            id
            databaseId
            slug
            name
            menuItems {
              edges {
                node {
                  id
                  url
                  label
                  path
                }
              }
            }
          }
        }
      }
    `,
  });

  const header = menus.data.menus.nodes.find((menu: any) => menu.slug === "header");
  const footer = menus.data.menus.nodes.find((menu: any) => menu.slug === "footer");

  return {
    header,
    footer,
  };
};

export default async function RootLayout({ children }: any) {
  const { header, footer } = await getData();

  return (
    <html lang="pl">
      <body>
        <Navbar data={header} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
