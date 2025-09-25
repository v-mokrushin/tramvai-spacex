import type { ImageViewerProps } from './types';

type GetImagesSwitchingAbilityParams = Pick<
  ImageViewerProps,
  'imageUrls' | 'currentImageIndex'
>;

export const getImagesSwitchingAbility = ({
  imageUrls,
  currentImageIndex,
}: GetImagesSwitchingAbilityParams) => {
  const imagesCount = imageUrls.length;

  const imagesMaxIndex = imagesCount - 1;

  const isLeftSwitchingEnabled = currentImageIndex > 0;

  const isRightSwitchingEnabled = currentImageIndex < imagesMaxIndex;

  return {
    isLeftSwitchingEnabled,
    isRightSwitchingEnabled,
  };
};

type GetSwitchingHandlersParams = ReturnType<typeof getImagesSwitchingAbility> &
  Pick<ImageViewerProps, 'onSetCurrentImageIndex' | 'currentImageIndex'>;

export const getSwitchingHandlers = ({
  currentImageIndex,
  onSetCurrentImageIndex,
  isLeftSwitchingEnabled,
  isRightSwitchingEnabled,
}: GetSwitchingHandlersParams) => {
  const onSwitchLeftImageHandler = () => {
    if (isLeftSwitchingEnabled) {
      onSetCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const onSwitchRightImageHandler = () => {
    if (isRightSwitchingEnabled) {
      onSetCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return {
    onSwitchLeftImageHandler,
    onSwitchRightImageHandler,
  };
};
