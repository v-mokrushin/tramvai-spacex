import { useEffect } from 'react';
import { rocketsModel } from '~entities/rockets';
import { PageLayout } from '~shared/ui';
import styles from './RocketsPage.module.css';
import { RocketCard } from './rocketCard/RocketCard';

export const RocketsPage = () => {
  const items = rocketsModel.useSelectItems();

  const status = rocketsModel.useSelectLoadingStatus();

  useEffect(() => {
    // localStorage.setItem(`RocketsPage ${Math.random()}`, 'render');

    return () => {
      //   resetRockets();
      //   localStorage.setItem(`RocketsPage ${Math.random()}`, 'unrender');
    };
  }, []);

  return (
    <PageLayout title="Rockets">
      {status === 'pending' ? (
        <span>loading</span>
      ) : (
        <div className={styles.innerContainer}>
          {items.map((item) => (
            <RocketCard key={item.id} rocket={item} />
          ))}
        </div>
      )}
    </PageLayout>
  );
};

RocketsPage.actions = [rocketsModel.loadRockets];
