import { useState, type FC } from 'react';
import type { WithRocketProp } from '~shared/types';

import styles from './Images.module.css';

export const Images: FC<WithRocketProp> = ({ rocket }) => {
  const images = rocket.flickr_images;

  const [mainImageUrl, setMainImageUrl] = useState(images[0] ?? '');

  const imagesCount = images.length;

  const rocketName = rocket.name;

  if (imagesCount === 0) {
    return null;
  }

  const otherImages = images.filter((url) => url !== mainImageUrl).slice(0, 4);

  const onSetMainImageClickHandler = (url: string) => () => {
    setMainImageUrl(url);
  };

  return (
    <div className={styles.container}>
      <img src={mainImageUrl} className={styles.mainImage} alt={rocketName} />
      <div className={styles.otherImagesContainer}>
        {otherImages.map((url) => (
          <img
            key={url}
            src={url}
            onClick={onSetMainImageClickHandler(url)}
            className={styles.otherImage}
            alt={rocketName}
          />
        ))}
      </div>
    </div>
  );
};
