import { useRoute } from '@tramvai/module-router';
import { rocketsModel } from '~entities/rockets';

export const useCurrentRocket = () => {
  const { id } = useRoute().params;

  return rocketsModel.useRocketById(id);
};
