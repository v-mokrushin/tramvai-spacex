import type { Rocket } from '~shared/types';

const MAX_IMAGES_COUNT = 5;

export const getImageUrls = (images: Rocket['flickr_images']) => {
  const imagesCount = images.length;

  const isImages = imagesCount > 0;

  const mainImageUrl = imagesCount ? images[0] : undefined;

  const otherImageUrls = images.slice(1, MAX_IMAGES_COUNT);

  return { mainImageUrl, otherImageUrls, isImages };
};
