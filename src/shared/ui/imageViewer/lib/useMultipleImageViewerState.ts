import { useState } from 'react';
import type { ImageUrls } from './types';

export const useMultipleImageViewerState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [imageUrls, setImageUrls] = useState<ImageUrls>([]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onOpen = (imageUrls: ImageUrls, currentImageIndex = 0) => {
    setIsOpen(true);
    setImageUrls(imageUrls);
    setCurrentImageIndex(currentImageIndex);
  };

  const onClose = () => setIsOpen(false);

  return {
    isOpen,
    onOpen,
    onClose,
    imageUrls,
    currentImageIndex,
  };
};
