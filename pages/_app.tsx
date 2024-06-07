import { AppProps } from "next/app";
import { NextPageContext } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import createApolloClient from "@/apollo-client";
import { gql } from "@apollo/client";
import RootLayout from "@/app/layout";
import Transition from "@/components/Transition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MyApp = (props: AppProps & Menus) => {
  const { Component, pageProps, menus } = props;

  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  return (
    <RootLayout hideNavbar={isLoading}>
      <Navbar menus={menus} />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} initial="initial" animate="animate" exit="exit">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer/>
    </RootLayout>
  );
};

MyApp.getInitialProps = async (ctx: NextPageContext) => {
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

interface Menus {
  menus: any[];
}

export default MyApp;
