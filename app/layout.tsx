import createApolloClient from "@/apollo-client";
import { gql } from "@apollo/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import './globals.css';

const getData = async () => {
  const client = createApolloClient();

  const menus = await client.query({
    query: gql`
      query Menus {
        menus {
          nodes {
            id
            databaseId
            slug
            name
            menuItems {
              edges {
                node {
                  id
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


  return {
    menus: menus.data.menus.nodes,
  };
};

export default async function RootLayout({ children }: any) {
  const { menus } = await getData();

  const header = menus?.find((menu: any) => menu.slug === "header");

  return (
    <html lang="pl">
      <body>
        <Navbar data={header} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

