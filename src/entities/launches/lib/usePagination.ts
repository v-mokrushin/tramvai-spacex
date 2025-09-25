import { useStoreSelector } from '@tramvai/state';
import { launchesStore } from '../model/store';

export const usePagination = () => {
  return useStoreSelector(launchesStore, (state) => state.pagination);
};
