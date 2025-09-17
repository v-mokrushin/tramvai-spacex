import { useStoreSelector } from '@tramvai/state';
import { rocketsStore } from '../model/store';
import { selectRockets } from '../model/selectors';

export const useRockets = () => useStoreSelector(rocketsStore, selectRockets);
