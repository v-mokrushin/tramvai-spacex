import { useStoreSelector } from '@tramvai/state';
import { launchesStore } from '../model/store';

export const useLaunches = () => {
  return useStoreSelector(launchesStore, (state) => state.launches);
};
