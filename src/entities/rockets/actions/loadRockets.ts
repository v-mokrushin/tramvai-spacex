import { declareAction } from '@tramvai/core';
import { apiClientDependency } from '~shared/api';
import type { Rocket } from '~shared/types';
import {
  rocketsLoading,
  rocketsLoadingDone,
  rocketsLoadingFailed,
} from '../model/events';

export const loadRockets = declareAction({
  name: 'loadRockets',
  async fn() {
    this.dispatch(rocketsLoading());

    try {
      const response = await this.deps.apiClient.get<Rocket[]>('rockets');

      this.dispatch(rocketsLoadingDone({ items: response.payload }));
    } catch (error) {
      this.dispatch(rocketsLoadingFailed());
    }
  },
  deps: apiClientDependency,
});
