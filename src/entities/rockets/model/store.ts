import { createReducer } from '@tramvai/state';
import { LOADING_STATUSES } from '~shared/constants';
import type { RocketsState } from './types';
import { resetRockets, rocketsLoading, rocketsLoadingDone } from './events';

const initialState: RocketsState = {
  items: [],
  loadingStatus: LOADING_STATUSES.idle,
};

export const rocketsStore = createReducer('rockets', initialState)
  .on(rocketsLoading, (state) => ({
    ...state,
    loadingStatus: LOADING_STATUSES.pending,
  }))
  .on(rocketsLoadingDone, (state, { items }) => {
    return { ...state, items, loadingStatus: LOADING_STATUSES.done };
  })
  .on(resetRockets, (state) => ({
    ...state,
    items: [],
    loadingStatus: LOADING_STATUSES.idle,
  }));
