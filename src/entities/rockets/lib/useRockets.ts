import { useStoreSelector } from '@tramvai/state';
import { rocketsStore } from '../model/store';

export const useRockets = () =>
  useStoreSelector(rocketsStore, (state) => state.rockets);
