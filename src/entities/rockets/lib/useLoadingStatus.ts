import { useStoreSelector } from '@tramvai/state';
import { getLoadingStatusDefinition } from '~shared/utils';
import { rocketsStore } from '../model/store';
import { selectLoadingStatus } from '../model/selectors';

export const useLoadingStatus = () => {
  const loadingStatus = useStoreSelector(rocketsStore, selectLoadingStatus);

  return getLoadingStatusDefinition(loadingStatus);
};
