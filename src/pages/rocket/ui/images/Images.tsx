import { type FC } from 'react';
import type { WithRocketProp } from '~shared/types';

import styles from './Images.module.css';
import { getImageUrls } from './utils';

export const Images: FC<WithRocketProp> = ({ rocket }) => {
  const { mainImageUrl, otherImageUrls, imagesCount } = getImageUrls(
    rocket.flickr_images
  );

  const rocketName = rocket.name;

  if (imagesCount === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <img src={mainImageUrl} className={styles.mainImage} alt={rocketName} />
      <div className={styles.otherImagesContainer}>
        {otherImageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className={styles.otherImage}
            alt={rocketName}
          />
        ))}
      </div>
    </div>
  );
};
