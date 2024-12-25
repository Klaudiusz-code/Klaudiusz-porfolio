import "./globals.css";
import Head from "next/head";

import { query } from "@/ApolloClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import GRAPHQL_QUERY from "@/gql-queries/menus.graphql";
import { MenusQuery, MenusQueryVariables } from "@/gql/graphql";

export default async function RootLayout({ children }: any) {
  const { data } = await query<MenusQuery, MenusQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const header = data.menus?.nodes.find((node: any) => node.slug === "header");
  const footer = data.menus?.nodes.find((node: any) => node.slug === "footer");

  return (
    <html lang="pl">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-94LB4ZY02J"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-94LB4ZY02J');
          `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar data={header} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
