import { createReducer } from '@tramvai/state';
import { loadingStatuses } from '~shared/constants';
import type { RocketsState } from './types';
import { resetRockets, rocketsLoading, rocketsLoadingDone } from './events';

const initialState: RocketsState = {
  rockets: [],
  rocketsMap: {},
  loadingStatus: loadingStatuses.IDLE,
};

export const rocketsStore = createReducer('rockets', initialState)
  .on(rocketsLoading, (state) => ({
    ...state,
    loadingStatus: loadingStatuses.PENDING,
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
      loadingStatus: loadingStatuses.DONE,
    };
  })
  .on(resetRockets, (state) => ({
    ...state,
    rockets: [],
    loadingStatus: loadingStatuses.IDLE,
  }));
