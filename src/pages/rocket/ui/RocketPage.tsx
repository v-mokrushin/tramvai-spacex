import { rocketsModel } from '~entities/rockets';
import { CenteredErrorMessage, PageLayout, PageLoader } from '~shared/ui';
import { generalLocales, rocketPageLocales } from '~shared/locales';
import { RocketsLoadingError } from '~features/rocketsLoadingError';
import { Specifications } from './specifications/Specifications';
import { Images } from './images/Images';
import styles from './RocketPage.module.css';
import { useCurrentRocket } from '../lib/useCurrentRocket';

export const RocketPage = () => {
  const rocket = useCurrentRocket();

  const { isDone, isPending, isFailed } = rocketsModel.useLoadingStatus();

  const isRocketObjectError = isDone && !rocket;

  const isDoneAndRocketOk = isDone && rocket;

  if (isPending) {
    return <PageLoader />;
  }

  if (isFailed) {
    return <RocketsLoadingError />;
  }

  if (isRocketObjectError) {
    return (
      <CenteredErrorMessage
        title={generalLocales.ERROR}
        description={rocketPageLocales.UNKNOWN_ROCKET_ID}
      />
    );
  }

  if (isDoneAndRocketOk) {
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
