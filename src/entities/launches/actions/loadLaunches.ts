import { declareAction } from '@tramvai/core';
import { apiClientDependency } from '~shared/api';
import { useActions } from '@tramvai/state';
import {
  launchesLoading,
  launchesLoadingDone,
  launchesLoadingFailed,
} from '../model/events';
import type { LoadLaunchesResponsePayload } from '../lib/types';
import { DEFAULT_LIMIT } from '../lib/config';
import { launchesStore } from '../model/store';

export const loadLaunchesAction = declareAction({
  name: 'loadLaunches',
  async fn(page?: number) {
    this.dispatch(launchesLoading());

    const { pagination } = this.getState(launchesStore);

    const requiredPage = page ?? pagination.page;

    try {
      const response =
        await this.deps.apiClient.post<LoadLaunchesResponsePayload>(
          'launches/query',
          {
            body: {
              options: {
                limit: DEFAULT_LIMIT,
                page: requiredPage,
                sort: {
                  flight_number: 'asc',
                },
              },
            },
          }
        );

      this.dispatch(launchesLoadingDone({ payload: response.payload }));
    } catch (_) {
      this.dispatch(launchesLoadingFailed());
    }
  },
  deps: apiClientDependency,
});

export const useLoadLaunchesDispatcher = () => {
  return useActions(loadLaunchesAction);
};
