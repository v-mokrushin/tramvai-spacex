import { createEvent } from '@tramvai/state';
import type { Rocket } from '~shared/types';

export const rocketsIsLoading = createEvent('rocketsIsLoading');

export const rocketsLoaded = createEvent<{ items: Rocket[] }>('rocketsLoaded');
