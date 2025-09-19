import createLogger from '@tinkoff/logger';
import { declareAction } from '@tramvai/core';
import { apiClientDependency } from '~shared/api';
import type { Rocket } from '~shared/types';
import { getIsClient, wait } from '~shared/utils';
import {
  rocketsLoading,
  rocketsLoadingDone,
  rocketsLoadingFailed,
} from '../model/events';

const log = createLogger('loadRocketsAction');

export const loadRockets = declareAction({
  name: 'loadRockets',
  async fn() {
    this.dispatch(rocketsLoading());

    try {
      //   await wait(1500);
      //   const response = await this.deps.apiClient.get<Rocket[]>('rockets', {p});
      const response = await this.deps.apiClient.get<Rocket[]>('rockets');

      log.error(`loadRockets getIsClient=${getIsClient()}`);

      this.dispatch(rocketsLoadingDone({ items: response.payload }));
    } catch (error) {
      this.dispatch(rocketsLoadingFailed());
    }
  },
  deps: apiClientDependency,
});
