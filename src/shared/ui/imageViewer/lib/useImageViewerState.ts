import { useState } from 'react';
import type { ImageUrls } from './types';

const INITIAL_IMAGE_INDEX = 0;

export const useImageViewerState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [imageUrls, setImageUrls] = useState<ImageUrls>([]);

  const [currentImageIndex, setCurrentImageIndex] =
    useState(INITIAL_IMAGE_INDEX);

  const onOpen = (
    imageUrls: ImageUrls,
    currentImageIndex = INITIAL_IMAGE_INDEX
  ) => {
    setIsOpen(true);
    setImageUrls(imageUrls);
    setCurrentImageIndex(currentImageIndex);
  };

  const onClose = () => setIsOpen(false);

  return {
    isOpen,
    onOpen,
    onClose,
    onSetCurrentImageIndex: setCurrentImageIndex,
    imageUrls,
    currentImageIndex,
  };
};

export type UseImageViewerStateReturn = ReturnType<typeof useImageViewerState>;
