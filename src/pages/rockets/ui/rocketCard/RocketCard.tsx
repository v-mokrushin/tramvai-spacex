import type { FC } from 'react';
import type { Rocket } from '~shared/types';

import classNames from 'classnames';
import { ANIMATIONS } from '~shared/constants';
import styles from './RocketCard.module.css';

type RocketCardProps = {
  rocket: Rocket;
};

export const RocketCard: FC<RocketCardProps> = ({ rocket }) => {
  const { name, flickr_images } = rocket;

  return (
    <div className={classNames(styles.container, ANIMATIONS.fadeIn)}>
      <img
        src={flickr_images[1]}
        alt={name}
        className={styles.backgroundImage}
      />
      <span className={styles.title}>{name}</span>
    </div>
  );
};
