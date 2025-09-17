import type { Rocket } from '~shared/types';
import { useStoreSelector } from '@tramvai/state';
import { rocketsStore } from '../model/store';
import { selectRocketById } from '../model/selectors';

export const useRocketById = (rocketId: Rocket['id']) =>
  useStoreSelector(rocketsStore, selectRocketById(rocketId));
