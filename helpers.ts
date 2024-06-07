import { gql } from "@apollo/client";
import createApolloClient from "./apollo-client";

export const getImageUrlBySize = (images: any, sizeName: string): any => {
  const image = images.mediaDetails.sizes.filter(
    (im: any) => im.name === sizeName
  );

  if (!image[0]) {
    return null;
  }

  return image[0];
};

export async function getMenus() {
  const client = createApolloClient();

  const websitesData = await client.query({
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
                url
                label
              }
            }
          }
        }
      }
    }
    `,
  });

  return {
    header: websitesData.data.menus.nodes.filter(
      (menu: any) => menu.slug === "header"
    )[0],
    footer: websitesData.data.menus.nodes.filter(
      (menu: any) => menu.slug === "footer"
    )[0],
  };
}
