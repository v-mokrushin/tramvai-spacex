import { useEffect } from 'react';
import type { ImageViewerProps } from './types';

const EVENT_TYPE = 'keydown';

type UseKeyboardEventsParams = Pick<ImageViewerProps, 'isOpen' | 'onClose'>;

export const useKeyboardEvents = ({
  isOpen,
  onClose,
}: UseKeyboardEventsParams) => {
  useEffect(() => {
    const eventHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      //   if (event.key === 'ArrowLeft') {
      //     imageViewerStore.switchPhoto(false);
      //   }
      //   if (event.key === 'ArrowRight') {
      //     imageViewerStore.switchPhoto(true);
      //   }
    };

    document.addEventListener(EVENT_TYPE, eventHandler);

    return () => document.removeEventListener(EVENT_TYPE, eventHandler);
  }, [isOpen, onClose]);
};
