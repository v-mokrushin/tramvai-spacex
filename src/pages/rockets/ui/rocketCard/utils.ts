import type { Rocket } from '~shared/types';

const APPROPRIATE_IMAGE_INDEX = 1;

export const getImageUrl = (images: Rocket['flickr_images']) => {
  const imagesCount = images.length;

  if (imagesCount >= 2) {
    return images[APPROPRIATE_IMAGE_INDEX];
  }

  if (imagesCount === 1) {
    return images[0];
  }

  return undefined;
};
