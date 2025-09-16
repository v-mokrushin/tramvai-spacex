import { rocketsModel } from '~entities/rockets';
import { getLoadingStatusDefinition } from '~shared/utils';

export const useLoadingStatus = () => {
  const loadingStatus = rocketsModel.useSelectLoadingStatus();

  return getLoadingStatusDefinition(loadingStatus);
};
