import { declareAction } from '@tramvai/core';
import { apiClientDependency } from '~shared/api';
import {
  launchesLoading,
  launchesLoadingDone,
  launchesLoadingFailed,
} from '../model/events';
import type { LoadLaunchesResponsePayload } from '../lib/types';

export const loadLaunchesAction = declareAction({
  name: 'loadLaunches',
  async fn() {
    this.dispatch(launchesLoading());

    try {
      const response =
        await this.deps.apiClient.post<LoadLaunchesResponsePayload>(
          'launches/query'
        );

      this.dispatch(launchesLoadingDone({ payload: response.payload }));
    } catch (_) {
      this.dispatch(launchesLoadingFailed());
    }
  },
  deps: apiClientDependency,
});
