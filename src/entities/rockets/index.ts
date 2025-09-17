import { Module, provide } from '@tramvai/core';
import { COMBINE_REDUCERS } from '@tramvai/module-common';
import { loadRockets } from './actions/loadRockets';
import { rocketsStore } from './model/store';
import { resetRockets } from './model/events';
import { useRockets } from './lib/useRockets';
import { useRocketById } from './lib/useRocketById';
import { useLoadingStatus } from './lib/useLoadingStatus';

export const rocketsModel = {
  loadRockets,
  resetRockets,
  useRockets,
  useRocketById,
  useLoadingStatus,
};

@Module({
  providers: [
    provide({
      provide: COMBINE_REDUCERS,
      multi: true,
      useValue: rocketsStore,
    }),
  ],
})
export class RocketsStoreModule {}
