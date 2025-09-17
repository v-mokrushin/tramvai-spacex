import { useRoute } from '@tramvai/module-router';
import { rocketsModel } from '~entities/rockets';
import { PageLayout, PageLoader } from '~shared/ui';
import { Specifications } from './specifications/Specifications';

export const RocketPage = () => {
  const { id } = useRoute().params;

  const rocket = rocketsModel.useRocketById(id);

  const { isIdle, isPending, isDone } = rocketsModel.useLoadingStatus();

  if (isPending) {
    return <PageLoader />;
  }

  if (!rocket || isIdle) {
    return null;
  }

  return (
    <PageLayout title={`${rocket.name}`}>
      <Specifications rocket={rocket} />
    </PageLayout>
  );
};

RocketPage.actions = [rocketsModel.loadRockets];
