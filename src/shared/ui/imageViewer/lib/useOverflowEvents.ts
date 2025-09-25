import { useEffect } from 'react';
import type { ImageViewerProps } from './types';

export const useOverflowEvents = (isOpen: ImageViewerProps['isOpen']) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
};
