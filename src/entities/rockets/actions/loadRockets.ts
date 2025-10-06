import { declareAction } from '@tramvai/core';
import { apiClientDependency } from '~shared/api';
import type { Rocket } from '~shared/types';
import { useActions } from '@tramvai/state';
import { getLoadingStatusDefinition } from '~shared/utils';
import {
  rocketsLoading,
  rocketsLoadingDone,
  rocketsLoadingFailed,
} from '../model/events';
import { rocketsStore } from '../model/store';

export const loadRocketsAction = declareAction({
  name: 'loadRockets',
  async fn() {
    const { loadingStatus } = this.getState(rocketsStore);

    const { isDone } = getLoadingStatusDefinition(loadingStatus);

    if (isDone) {
      return;
    }

    this.dispatch(rocketsLoading());

    try {
      const response = await this.deps.apiClient.get<Rocket[]>('rocke');

      this.dispatch(rocketsLoadingDone({ items: response.payload }));
    } catch (_) {
      this.dispatch(rocketsLoadingFailed());
    }
  },
  deps: apiClientDependency,
  conditions: {
    dynamic: true,
  },
});

export const useLoadRocketsDispatcher = () => {
  return useActions(loadRocketsAction);
};
