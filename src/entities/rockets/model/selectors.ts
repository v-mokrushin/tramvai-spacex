import { useStoreSelector } from '@tramvai/state';
import { rocketsStore } from './store';

export const useSelectItems = () =>
  useStoreSelector(rocketsStore, (state) => state.items);

export const useSelectLoadingStatus = () =>
  useStoreSelector(rocketsStore, (state) => state.loadingStatus);
