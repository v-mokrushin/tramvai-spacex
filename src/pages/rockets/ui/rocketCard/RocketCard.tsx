import type { FC } from 'react';
import type { Rocket } from '~shared/types';

import classNames from 'classnames';
import { ANIMATIONS } from '~shared/constants';
import { useNavigation } from '~shared/hooks';
import styles from './RocketCard.module.css';

type RocketCardProps = {
  rocket: Rocket;
};

export const RocketCard: FC<RocketCardProps> = ({ rocket }) => {
  const navigate = useNavigation();

  const { id, name, flickr_images } = rocket;

  const onClickHandler = () => {
    navigate.toRocket(id);
  };

  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={classNames(styles.container, ANIMATIONS.fadeIn)}
    >
      <img
        src={flickr_images[1]}
        alt={name}
        className={styles.backgroundImage}
      />
      <span className={styles.title}>{name}</span>
    </button>
  );
};
