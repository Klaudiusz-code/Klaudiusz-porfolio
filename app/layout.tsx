import './globals.css';

import { query } from '@/ApolloClient';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import GRAPHQL_QUERY from "@/gql-queries/menus.graphql";
import { MenusQuery, MenusQueryVariables } from '@/gql/graphql';

export default async function RootLayout({ children }: any) {
  const { data } = await query<MenusQuery, MenusQueryVariables>({ query: GRAPHQL_QUERY });

  const header = data.menus?.nodes.find((node: any) => node.slug === 'header');
  const footer = data.menus?.nodes.find((node: any) => node.slug === 'footer');

  return (
    <html lang="pl">
      <body>
          <Navbar data={header} />
          {children}
          <Footer data={footer} />
      </body>
    </html>
  );
};
