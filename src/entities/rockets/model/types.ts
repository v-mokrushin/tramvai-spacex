import type { LoadingStatus, Rocket } from '~shared/types';

export type RocketsState = {
  items: Rocket[];
  loadingStatus: LoadingStatus;
};
