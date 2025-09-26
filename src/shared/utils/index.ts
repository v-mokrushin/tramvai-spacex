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

export const getLoadingStatusDefinition = (loadingStatus: LoadingStatus) => {
  const isDone = loadingStatus === loadingStatuses.DONE;
  const isPending = loadingStatus === loadingStatuses.PENDING;

  return {
    isIdle: loadingStatus === loadingStatuses.IDLE,
    isPending,
    isDone,
    isFailed: loadingStatus === loadingStatuses.FAILED,
    isNotDoneAndNotPending: !isDone && !isPending,
  };
};

export const getFormattedNumberWithSpaces = (number: number) => {
  const roundedAmount = Math.round(number);

  return roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const logInStorage = (key: string | number) => {
  if (!getIsClient()) return;
  localStorage.setItem(`${key} ${crypto.randomUUID().slice(0, 5)}`, 'render');
};
