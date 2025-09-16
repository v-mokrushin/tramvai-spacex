import { useStoreSelector } from '@tramvai/state';
import type { Rocket } from '~shared/types';
import { rocketsStore } from './store';

export const useSelectItems = () =>
  useStoreSelector(rocketsStore, (state) => state.rockets);

export const useSelectLoadingStatus = () =>
  useStoreSelector(rocketsStore, (state) => state.loadingStatus);

export const useSelectRocket = (rocketId: Rocket['id']): Rocket | undefined =>
  useStoreSelector(rocketsStore, (state) => state.rocketsMap[rocketId]);
