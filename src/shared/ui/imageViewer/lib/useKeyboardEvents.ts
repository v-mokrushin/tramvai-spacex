import { useEffect, useRef } from 'react';
import type { ImageViewerProps, SwitchingHandlers } from './types';
import { eventKeys } from './config';

const KEYDOWN_EVENT_TYPE = 'keydown';

type UseKeyboardEventsParams = Pick<ImageViewerProps, 'isOpen' | 'onClose'> &
  SwitchingHandlers;

export const useKeyboardEvents = ({
  isOpen,
  onClose,
  onSwitchLeftImageHandler,
  onSwitchRightImageHandler,
}: UseKeyboardEventsParams) => {
  const handlers = useRef({
    onClose,
    onSwitchLeftImageHandler,
    onSwitchRightImageHandler,
  });

  useEffect(() => {
    handlers.current = {
      onClose,
      onSwitchLeftImageHandler,
      onSwitchRightImageHandler,
    };
  });

  useEffect(() => {
    if (!isOpen) return;

    const eventHandler = (event: KeyboardEvent) => {
      const { onClose, onSwitchLeftImageHandler, onSwitchRightImageHandler } =
        handlers.current;

      if (event.key === eventKeys.ESCAPE) {
        onClose();
      }

      if (event.key === eventKeys.ARROW_LEFT) {
        onSwitchLeftImageHandler();
      }

      if (event.key === eventKeys.ARROW_RIGHT) {
        onSwitchRightImageHandler();
      }
    };

    document.addEventListener(KEYDOWN_EVENT_TYPE, eventHandler);

    return () => document.removeEventListener(KEYDOWN_EVENT_TYPE, eventHandler);
  }, [isOpen]);
};
