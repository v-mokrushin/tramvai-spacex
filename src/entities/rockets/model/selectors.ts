import type { Rocket } from '~shared/types';
import type { RocketsState } from './types';

export const selectRockets = (state: RocketsState) => state.rockets;

export const selectRocketById =
  (rocketId: Rocket['id']) =>
  (state: RocketsState): Rocket | undefined =>
    state.rocketsMap[rocketId];

export const selectLoadingStatus = (state: RocketsState) => state.loadingStatus;
