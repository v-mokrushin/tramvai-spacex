import { createReducer } from '@tramvai/state';
import { loadingStatuses } from '~shared/constants';
import type { LaunchesState } from '../lib/types';
import { launchesLoading, launchesLoadingDone } from './events';
import { DEFAULT_LIMIT } from '../lib/config';

const initialState: LaunchesState = {
  launches: [],
  loadingStatus: loadingStatuses.IDLE,
  pagination: {
    totalDocs: 0,
    offset: 0,
    limit: DEFAULT_LIMIT,
    totalPages: 0,
    page: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  },
};

export const launchesStore = createReducer('launches', initialState)
  .on(launchesLoading, (state) => ({
    ...state,
    loadingStatus: loadingStatuses.PENDING,
  }))
  .on(launchesLoadingDone, (_, { payload }) => {
    const { docs, ...pagination } = payload;

    return {
      launches: docs,
      pagination,
      loadingStatus: loadingStatuses.DONE,
    };
  });
