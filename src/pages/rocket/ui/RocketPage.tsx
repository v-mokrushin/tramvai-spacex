import { useRoute } from '@tramvai/module-router';
import { rocketsModel } from '~entities/rockets';
import { PageLayout, PageLoader } from '~shared/ui';

export const RocketPage = () => {
  const { id } = useRoute().params;

  const rocket = rocketsModel.useRocketById(id);

  const { isPending, isDone } = rocketsModel.useLoadingStatus();

  if (isPending) {
    return <PageLoader />;
  }

  if (isDone && !rocket) {
    return <span>Ошибка</span>;
  }

  return (
    <PageLayout title={`${rocket?.name}`}>
      <span>RocketPage {id}</span>
    </PageLayout>
  );
};

RocketPage.actions = [rocketsModel.loadRockets];
