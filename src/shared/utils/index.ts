import { LOADING_STATUSES } from '~shared/constants';
import type { LoadingStatus } from '~shared/types';

export const getBackgroundImageStyle = (url: string) => ({
  backgroundImage: `url(${url})`,
});

export const getIsClient = () => typeof window !== 'undefined';

export const wait = (delay = 1500) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

export const getLoadingStatusDefinition = (loadingStatus: LoadingStatus) => ({
  isIdle: loadingStatus === LOADING_STATUSES.idle,
  isPending: loadingStatus === LOADING_STATUSES.pending,
  isDone: loadingStatus === LOADING_STATUSES.done,
  isFailed: loadingStatus === LOADING_STATUSES.failed,
});
