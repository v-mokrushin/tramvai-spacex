import type { FC } from 'react';
import type { Rocket } from '~shared/types';

import classNames from 'classnames';
import { useNavigation } from '~shared/hooks';
import { WrappingButton } from '~shared/ui';
import styles from './RocketCard.module.css';

const IMAGE_INDEX = 1;

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
    <WrappingButton
      onClick={onClickHandler}
      className={classNames(styles.container)}
    >
      <img
        src={flickr_images[IMAGE_INDEX]}
        alt={name}
        className={styles.backgroundImage}
      />
      <span className={styles.title}>{name}</span>
    </WrappingButton>
  );
};
