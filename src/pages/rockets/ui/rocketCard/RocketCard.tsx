import type { FC } from 'react';
import type { Rocket } from '~shared/types';

import { Link } from '@tramvai/module-router';
import { routes } from '~shared/constants';
import styles from './RocketCard.module.css';
import { getImageUrl } from './utils';

type RocketCardProps = {
  rocket: Rocket;
};

export const RocketCard: FC<RocketCardProps> = ({ rocket }) => {
  const { id, name, flickr_images } = rocket;

  const imageSrc = getImageUrl(flickr_images);

  const url = `${routes.ROCKET}/${id}`;

  return (
    <Link url={url} className={styles.container}>
      <img src={imageSrc} alt={name} className={styles.backgroundImage} />
      <span className={styles.title}>{name}</span>
    </Link>
  );
};
