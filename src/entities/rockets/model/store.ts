import { createReducer } from '@tramvai/state';
import { LOADING_STATUSES } from '~shared/constants';
import type { RocketsState } from './types';
import { rocketsIsLoading, rocketsLoaded } from './events';

const initialState: RocketsState = {
  items: [],
  loadingStatus: LOADING_STATUSES.idle,
};

export const rocketsReducer = createReducer('rockets', initialState)
  .on(rocketsIsLoading, (state) => ({
    ...state,
    loadingStatus: LOADING_STATUSES.pending,
  }))
  .on(rocketsLoaded, (state, { items }) => {
    return { ...state, items, loadingStatus: LOADING_STATUSES.done };
  });
