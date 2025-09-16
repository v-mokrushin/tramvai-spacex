import { createReducer } from '@tramvai/state';
import { LOADING_STATUSES } from '~shared/constants';
import type { RocketsState } from './types';
import { resetRockets, rocketsLoading, rocketsLoadingDone } from './events';

const initialState: RocketsState = {
  rockets: [],
  rocketsMap: {},
  loadingStatus: LOADING_STATUSES.idle,
};

export const rocketsStore = createReducer('rockets', initialState)
  .on(rocketsLoading, (state) => ({
    ...state,
    loadingStatus: LOADING_STATUSES.pending,
  }))
  .on(rocketsLoadingDone, (state, { items }) => {
    const rocketsMap = items.reduce<RocketsState['rocketsMap']>((map, item) => {
      // eslint-disable-next-line no-param-reassign
      map[item.id] = item;
      return map;
    }, {});

    return {
      ...state,
      rockets: items,
      rocketsMap,
      loadingStatus: LOADING_STATUSES.done,
    };
  })
  .on(resetRockets, (state) => ({
    ...state,
    rockets: [],
    loadingStatus: LOADING_STATUSES.idle,
  }));
