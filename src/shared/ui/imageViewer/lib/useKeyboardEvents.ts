import { useEffect } from 'react';
import type { ImageViewerProps } from './types';

const EVENT_TYPE = 'keydown';

type UseKeyboardEventsParams = Pick<ImageViewerProps, 'isOpen' | 'onClose'> & {
  onSwitchLeft: VoidFunction;
  onSwitchRight: VoidFunction;
};

export const useKeyboardEvents = ({
  isOpen,
  onClose,
  onSwitchLeft,
  onSwitchRight,
}: UseKeyboardEventsParams) => {
  useEffect(() => {
    const eventHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowLeft') {
        onSwitchLeft();
      }

      if (event.key === 'ArrowRight') {
        onSwitchRight();
      }
    };

    document.addEventListener(EVENT_TYPE, eventHandler);

    return () => document.removeEventListener(EVENT_TYPE, eventHandler);
  }, [isOpen, onClose, onSwitchLeft, onSwitchRight]);
};
