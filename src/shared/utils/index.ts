import { loadingStatuses } from '~shared/constants';
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
  isIdle: loadingStatus === loadingStatuses.IDLE,
  isPending: loadingStatus === loadingStatuses.PENDING,
  isDone: loadingStatus === loadingStatuses.DONE,
  isFailed: loadingStatus === loadingStatuses.FAILED,
});

export const getFormattedNumberWithSpaces = (number: number) => {
  const roundedAmount = Math.round(number);

  return roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
