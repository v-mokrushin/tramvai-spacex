import type { ImageViewerProps } from './types';

type GetImagesSwitchingAbilityParams = Pick<
  ImageViewerProps,
  'currentImageIndex'
> & {
  imagesCount: number;
};

export const getImagesSwitchingAbility = ({
  imagesCount,
  currentImageIndex,
}: GetImagesSwitchingAbilityParams) => {
  const imagesMaxIndex = imagesCount - 1;

  const isLeftSwitchingEnabled = currentImageIndex > 0;

  const isRightSwitchingEnabled = currentImageIndex < imagesMaxIndex;

  return {
    isLeftSwitchingEnabled,
    isRightSwitchingEnabled,
  };
};

type GetSwitchingHandlersParams = ReturnType<typeof getImagesSwitchingAbility> &
  Pick<ImageViewerProps, 'onSetCurrentImageIndex'>;

export const getSwitchingHandlers = ({
  onSetCurrentImageIndex,
  isLeftSwitchingEnabled,
  isRightSwitchingEnabled,
}: GetSwitchingHandlersParams) => {
  const onSwitchLeftImageHandler = () => {
    if (isLeftSwitchingEnabled) {
      onSetCurrentImageIndex((currentImageIndex) => currentImageIndex - 1);
    }
  };

  const onSwitchRightImageHandler = () => {
    if (isRightSwitchingEnabled) {
      onSetCurrentImageIndex((currentImageIndex) => currentImageIndex + 1);
    }
  };

  return {
    onSwitchLeftImageHandler,
    onSwitchRightImageHandler,
  };
};
