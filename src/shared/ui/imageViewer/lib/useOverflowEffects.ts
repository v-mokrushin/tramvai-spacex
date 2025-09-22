import { useEffect } from 'react';
import type { ImageViewerProps } from './types';

type UseOverflowEffectsParams = Pick<ImageViewerProps, 'isOpen'>;

export const useOverflowEffects = ({ isOpen }: UseOverflowEffectsParams) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
};
