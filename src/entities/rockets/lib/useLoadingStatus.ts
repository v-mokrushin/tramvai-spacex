import { useStoreSelector } from '@tramvai/state';
import { getLoadingStatusDefinition } from '~shared/utils';
import { rocketsStore } from '../model/store';

export const useLoadingStatus = () => {
  const loadingStatus = useStoreSelector(
    rocketsStore,
    (state) => state.loadingStatus
  );

  return getLoadingStatusDefinition(loadingStatus);
};
