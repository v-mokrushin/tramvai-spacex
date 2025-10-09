import type { UseImageViewerStateReturn } from './useImageViewerState';
import type { getSwitchingHandlers } from './utils';

export type ImageViewerProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  imageUrls: ImageUrls;
  currentImageIndex: number;
  onSetCurrentImageIndex: UseImageViewerStateReturn['onSetCurrentImageIndex'];
};

export type ImageUrls = string[];

export type SwitchingHandlers = ReturnType<typeof getSwitchingHandlers>;
