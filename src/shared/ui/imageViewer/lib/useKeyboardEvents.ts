import { useEffect } from 'react';
import { logInStorage } from '~shared/utils';
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
  useEffect(() => {
    if (!isOpen) return;

    logInStorage('useKeyboardEvents');

    const eventHandler = (event: KeyboardEvent) => {
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
  }, [isOpen, onClose, onSwitchLeftImageHandler, onSwitchRightImageHandler]);
};
