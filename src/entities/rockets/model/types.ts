import type { LoadingStatus, Rocket } from '~shared/types';

export type RocketsState = {
  rockets: Rocket[];
  rocketsMap: Record<Rocket['id'], Rocket>;
  loadingStatus: LoadingStatus;
};
