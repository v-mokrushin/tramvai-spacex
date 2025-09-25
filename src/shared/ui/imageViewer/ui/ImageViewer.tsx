import type { FC } from 'react';
import classNames from 'classnames';
import styles from './ImageViewer.module.css';
import { Portal } from '../../portal';
import type { ImageViewerProps } from '../lib/types';
import { useOverflowEvents } from '../lib/useOverflowEvents';
import { useKeyboardEvents } from '../lib/useKeyboardEvents';
import { CloseButton } from './closeButton/CloseButton';
import { ArrowButton } from './arrowButton/ArrowButton';
import { getImagesSwitchingAbility, getSwitchingHandlers } from '../lib/utils';

export const ImageViewer: FC<ImageViewerProps> = ({
  isOpen,
  onClose,
  imageUrls,
  currentImageIndex,
  onSetCurrentImageIndex,
}) => {
  const currentImageUrl = imageUrls[currentImageIndex];

  const { isLeftSwitchingEnabled, isRightSwitchingEnabled } =
    getImagesSwitchingAbility({ imageUrls, currentImageIndex });

  const { onSwitchLeftImageHandler, onSwitchRightImageHandler } =
    getSwitchingHandlers({
      currentImageIndex,
      onSetCurrentImageIndex,
      isLeftSwitchingEnabled,
      isRightSwitchingEnabled,
    });

  useOverflowEvents(isOpen);

  useKeyboardEvents({
    isOpen,
    onClose,
    onSwitchLeft: onSwitchLeftImageHandler,
    onSwitchRight: onSwitchRightImageHandler,
  });

  return (
    <Portal>
      <div
        className={classNames(styles.container, isOpen && styles.containerOpen)}
      >
        <img alt="" src={currentImageUrl} className={styles.image} />
        <CloseButton onClick={onClose} />
        {isLeftSwitchingEnabled && (
          <ArrowButton direction="left" onClick={onSwitchLeftImageHandler} />
        )}
        {isRightSwitchingEnabled && (
          <ArrowButton direction="right" onClick={onSwitchRightImageHandler} />
        )}
      </div>
    </Portal>
  );
};
