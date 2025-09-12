import { Module, provide } from '@tramvai/core';
import { COMBINE_REDUCERS } from '@tramvai/module-common';
import { loadRockets } from './actions/loadRockets';
import { useSelectItems, useSelectLoadingStatus } from './model/selectors';
import { rocketsStore } from './model/store';

export const rocketsModel = {
  loadRockets,
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
