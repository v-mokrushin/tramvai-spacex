import { useEffect } from 'react';
import { rocketsModel } from '~entities/rockets';
import styles from './RocketsPage.module.css';

export const RocketsPage = () => {
  const items = rocketsModel.useSelectItems();

  const status = rocketsModel.useSelectLoadingStatus();

  useEffect(() => {
    // localStorage.setItem(`RocketsPage ${Math.random()}`, 'render');

    return () => {
      //   localStorage.setItem(`RocketsPage ${Math.random()}`, 'unrender');
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {items.map(({ id, name, flickr_images }) => (
          <div key={id} className={styles.box}>
            <img src={flickr_images[1]} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

RocketsPage.actions = [rocketsModel.loadRockets];
