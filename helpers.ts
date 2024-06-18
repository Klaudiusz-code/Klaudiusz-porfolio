export const getImageUrlBySize = (images: any, sizeName: string): any => {
  const image = images?.mediaDetails?.sizes?.find(
    (im: any) => im.name === sizeName
  );

  if (!image) {
    return null;
  }

  return image;
};