import type { FC } from 'react';
import classNames from 'classnames';
import styles from './ImageViewer.module.css';
import { Portal } from '../../portal/Portal';
import type { ImageViewerProps } from '../lib/types';
import { useOverflowEffects } from '../lib/useOverflowEffects';
import { useKeyboardEvents } from '../lib/useKeyboardEvents';

export const ImageViewer: FC<ImageViewerProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageUrls,
  currentImageIndex,
  onSetCurrentImageIndex,
}) => {
  const currentImageUrl = (() => {
    if (imageUrl) {
      return imageUrl;
    }

    if (imageUrls && currentImageIndex !== undefined) {
      return imageUrls[currentImageIndex];
    }
  })();

  const displayMode = (() => {
    if (imageUrl) {
      return 'single';
    }

    if (imageUrls && currentImageIndex !== undefined) {
      return 'multiple';
    }
  })();

  //   const {onSwitchLeftImage}

  useOverflowEffects({ isOpen });

  useKeyboardEvents({ isOpen, onClose });

  if (!displayMode) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(styles.container, isOpen && styles.containerOpen)}
      >
        <img alt="" src={currentImageUrl} className={styles.image} />
        <button type="button" onClick={onClose} className={styles.closeButton}>
          {/* <div className={styles.closeButton_icon}></div> */}
          Закрыть
        </button>
      </div>
    </Portal>
  );
};
