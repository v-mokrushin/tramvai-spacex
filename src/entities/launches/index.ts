import { Module, provide } from '@tramvai/core';
import { COMBINE_REDUCERS } from '@tramvai/module-common';
import { launchesStore } from './model/store';

export const launchesModel = {};

@Module({
  providers: [
    provide({
      provide: COMBINE_REDUCERS,
      multi: true,
      useValue: launchesStore,
    }),
  ],
})
export class LaunchesStorModule {}
