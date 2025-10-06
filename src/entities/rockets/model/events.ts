import { createEvent } from '@tramvai/state';
import type { Rocket } from '~shared/types';

export const rocketsLoading = createEvent('rocketsIsLoading');

export const rocketsLoadingFailed = createEvent('rocketsLoadingFailed');

export const rocketsLoadingDone = createEvent<{ items: Rocket[] }>(
  'rocketsLoadingDone'
);

export const resetRockets = createEvent('resetRockets');
