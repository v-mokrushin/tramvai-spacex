import { rocketsModel } from '~entities/rockets';
import { CenteredErrorMessage, PageLayout, PageLoader } from '~shared/ui';
import { generalLocales } from '~shared/locales';
import styles from './RocketsPage.module.css';
import { RocketCard } from './rocketCard/RocketCard';

export const RocketsPage = () => {
  const items = rocketsModel.useRockets();

  const { isPending, isDone, isFailed } = rocketsModel.useLoadingStatus();

  if (isPending) {
    return <PageLoader />;
  }

  if (isFailed) {
    return <CenteredErrorMessage title={generalLocales.LOADING_FAILED} />;
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
