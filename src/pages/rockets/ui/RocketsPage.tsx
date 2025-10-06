import { rocketsModel } from '~entities/rockets';
import { PageLayout, PageLoader } from '~shared/ui';
import { generalLocales } from '~shared/locales';
import { RocketsLoadingError } from '~features/rocketsLoadingError';
import styles from './RocketsPage.module.css';
import { RocketCard } from './rocketCard/RocketCard';

export const RocketsPage = () => {
  const items = rocketsModel.useRockets();

  const { isPending, isDone, isFailed } = rocketsModel.useLoadingStatus();

  if (isPending) {
    return <PageLoader />;
  }

  if (isFailed) {
    return <RocketsLoadingError />;
  }

  if (isDone) {
    return (
      <PageLayout title={generalLocales.ROCKETS}>
        <div className={styles.container}>
          {items.map((item) => (
            <RocketCard key={item.id} rocket={item} />
          ))}
        </div>
      </PageLayout>
    );
  }

  return null;
};

RocketsPage.actions = [rocketsModel.loadRocketsAction];
