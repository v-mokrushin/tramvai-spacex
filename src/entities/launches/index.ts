import { Module, provide } from '@tramvai/core';
import { COMBINE_REDUCERS } from '@tramvai/module-common';
import { launchesStore } from './model/store';
import { useLaunches } from './lib/useLaunches';
import { useLoadLaunchesDispatcher } from './actions/loadLaunches';
import { usePagination } from './lib/usePagination';
import { useLoadingStatus } from './lib/useLoadingStatus';

export const launchesModel = {
  useLaunches,
  useLoadLaunchesDispatcher,
  usePagination,
  useLoadingStatus,
};

@Module({
  providers: [
    provide({
      provide: COMBINE_REDUCERS,
      multi: true,
      useValue: launchesStore,
    }),
  ],
})
export class LaunchesStoreModule {}
