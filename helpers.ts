export const getImageUrlBySize = (images: any, sizeName: string): any => {
  const image = images.mediaDetails.sizes.filter(
    (im: any) => im.name === sizeName
  );

  if (!image[0]) {
    return null;
  }

  return image[0];
};
