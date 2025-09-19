import type { FC } from 'react';
import type { Rocket } from '~shared/types';

import classNames from 'classnames';
import { useNavigation } from '~shared/hooks';
import { WrappingButton } from '~shared/ui';
import styles from './RocketCard.module.css';
import { getImageUrl } from './utils';

type RocketCardProps = {
  rocket: Rocket;
};

export const RocketCard: FC<RocketCardProps> = ({ rocket }) => {
  const navigate = useNavigation();

  const { id, name, flickr_images } = rocket;

  const imageSrc = getImageUrl(flickr_images);

  const onClickHandler = () => {
    navigate.toRocket(id);
  };

  return (
    <WrappingButton
      onClick={onClickHandler}
      className={classNames(styles.container)}
    >
      <img src={imageSrc} alt={name} className={styles.backgroundImage} />
      <span className={styles.title}>{name}</span>
    </WrappingButton>
  );
};
