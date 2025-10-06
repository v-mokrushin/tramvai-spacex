import type { Rocket } from '~shared/types';
import { useStoreSelector } from '@tramvai/state';
import { rocketsStore } from '../model/store';

export const useRocketById = (rocketId: Rocket['id']): Rocket | undefined =>
  useStoreSelector(rocketsStore, (state) => state.rocketsMap[rocketId]);
