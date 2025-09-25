import { createEvent } from '@tramvai/state';
import type { LoadLaunchesResponsePayload } from '../lib/types';

export const launchesLoading = createEvent('launchesIsLoading');

export const launchesLoadingFailed = createEvent('launchesIsLoading');

export const launchesLoadingDone = createEvent<{
  payload: LoadLaunchesResponsePayload;
}>('launchesLoadingDone');
