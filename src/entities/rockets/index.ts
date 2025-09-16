import { Module, provide } from '@tramvai/core';
import { COMBINE_REDUCERS } from '@tramvai/module-common';
import { loadRockets } from './actions/loadRockets';
import { useSelectItems, useSelectLoadingStatus } from './model/selectors';
import { rocketsStore } from './model/store';
import { resetRockets } from './model/events';

export const rocketsModel = {
  loadRockets,
  resetRockets,
  useSelectItems,
  useSelectLoadingStatus,
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
