import { useRoute } from '@tramvai/module-router';
import { rocketsModel } from '~entities/rockets';
import { PageLayout, PageLoader } from '~shared/ui';
import { Specifications } from './specifications/Specifications';
import { Images } from './images/Images';
import styles from './RocketPage.module.css';

export const RocketPage = () => {
  const { id } = useRoute().params;

  const rocket = rocketsModel.useRocketById(id);

  const { isDone, isPending } = rocketsModel.useLoadingStatus();

  if (isPending) {
    return <PageLoader />;
  }

  if (isDone && rocket) {
    return (
      <PageLayout title={rocket.name}>
        <div className={styles.container}>
          <span className={styles.description}>{rocket.description}</span>
          <Images rocket={rocket} />
          <Specifications rocket={rocket} />
        </div>
      </PageLayout>
    );
  }

  return null;
};

RocketPage.actions = [rocketsModel.loadRocketsAction];
