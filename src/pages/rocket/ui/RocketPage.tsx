import { useRoute } from '@tramvai/module-router';
import { rocketsModel } from '~entities/rockets';
import { PageLayout, PageLoader } from '~shared/ui';
import { ANIMATIONS } from '~shared/constants';
import { Specifications } from './specifications/Specifications';
import { Images } from './images/Images';
import styles from './RocketPage.module.css';

export const RocketPage = () => {
  const { id } = useRoute().params;

  const rocket = rocketsModel.useRocketById(id);

  const { isIdle, isPending } = rocketsModel.useLoadingStatus();

  if (isPending) {
    return <PageLoader />;
  }

  if (!rocket || isIdle) {
    return null;
  }

  return (
    <PageLayout title={`${rocket.name}`} className={ANIMATIONS.fadeIn}>
      <div className={styles.container}>
        <span className={styles.description}>{rocket.description}</span>
        <Images rocket={rocket} />
        <Specifications rocket={rocket} />
      </div>
    </PageLayout>
  );
};

RocketPage.actions = [rocketsModel.loadRockets];
