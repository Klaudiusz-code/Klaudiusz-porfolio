export const getImageUrlBySize = (images: any, sizeName: string): any => {
  const image = images.mediaDetails.sizes.filter(
    (im: any) => im.name === sizeName
  );

  if (!image[0]) {
    return null;
  }

  return image[0];
};

export function getMenus() {
  // const { data } = useQuery(GET_MENUS);

  return {
    // header: data.data.menus.nodes.filter(
    //   (menu: any) => menu.slug === "header"
    // )[0],
    // footer: data.data.menus.nodes.filter(
    //   (menu: any) => menu.slug === "footer"
    // )[0],
    header: null,
    footer: null,
  };
}
