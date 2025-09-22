import type { FC } from 'react';
import classNames from 'classnames';
import styles from './ImageViewer.module.css';
import { Portal } from '../portal/Portal';
import type { ImageViewerProps } from './lib/types';
import { useOverflowEffects } from './lib/useOverflowEffects';

export const ImageViewer: FC<ImageViewerProps> = ({
  isOpen,
  onClose,
  imageUrl,
}) => {
  useOverflowEffects({ isOpen });

  return (
    <Portal>
      <div
        className={classNames(styles.container, isOpen && styles.containerOpen)}
      >
        <img alt="" src={imageUrl} className={styles.image} />
        {/* {imageViewerStore.isCollection && (
        <Text bold className={styles.counter}>
          {imageViewerStore.counter}
        </Text>
      )} */}
        <button type="button" onClick={onClose} className={styles.closeButton}>
          {/* <div className={styles.closeButton_icon}></div> */}
          Закрыть
        </button>
        {/* {imageViewerStore.isCollection && (
        <>
          {imageViewerStore.isFarLeft || (
            <button
              className={classNames(styles.switchButton_left)}
              onClick={() => imageViewerStore.switchPhoto(false)}
            >
              <div className={styles.switchButton_arrow}></div>
            </button>
          )}
          {(imageViewerStore.isCollection && imageViewerStore.isFarRight) || (
            <button
              className={styles.switchButton_right}
              onClick={() => imageViewerStore.switchPhoto(true)}
            >
              <div className={styles.switchButton_arrow}></div>
            </button>
          )}
        </>
      )} */}
      </div>
    </Portal>
  );
};
