import { type FC } from 'react';
import type { WithRocketProp } from '~shared/types';

import { ImageViewer, useImageViewerState, WrappingButton } from '~shared/ui';
import styles from './Images.module.css';
import { getImageUrls } from './utils';

export const Images: FC<WithRocketProp> = ({ rocket }) => {
  const { name, flickr_images: images } = rocket;

  const imageViewer = useImageViewerState();

  const { mainImageUrl, otherImageUrls, isImages } = getImageUrls(images);

  const onClickMainImageHandler = () => {
    imageViewer.onOpen(images, 0);
  };

  const onClickImageHandler = (index: number) => () => {
    imageViewer.onOpen(images, index + 1);
  };

  if (!isImages) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <WrappingButton onClick={onClickMainImageHandler}>
          <img src={mainImageUrl} className={styles.mainImage} alt={name} />
        </WrappingButton>
        <div className={styles.otherImagesContainer}>
          {otherImageUrls.map((url, index) => (
            <WrappingButton key={url} onClick={onClickImageHandler(index)}>
              <img src={url} className={styles.otherImage} alt={name} />
            </WrappingButton>
          ))}
        </div>
      </div>
      <ImageViewer
        isOpen={imageViewer.isOpen}
        onClose={imageViewer.onClose}
        imageUrls={imageViewer.imageUrls}
        currentImageIndex={imageViewer.currentImageIndex}
        onSetCurrentImageIndex={imageViewer.onSetCurrentImageIndex}
      />
    </>
  );
};
