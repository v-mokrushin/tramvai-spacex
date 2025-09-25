import { useStoreSelector } from '@tramvai/state';
import { getLoadingStatusDefinition } from '~shared/utils';
import { launchesStore } from '../model/store';

export const useLoadingStatus = () => {
  const loadingStatus = useStoreSelector(
    launchesStore,
    (state) => state.loadingStatus
  );

  return getLoadingStatusDefinition(loadingStatus);
};
