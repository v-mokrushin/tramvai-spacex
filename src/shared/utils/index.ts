import type { CSSProperties } from 'react';
import { loadingStatuses, routes } from '~shared/constants';
import type { Id, LoadingStatus } from '~shared/types';

export const getBackgroundImageStyle = (url: string): CSSProperties => ({
  backgroundImage: `url(${url})`,
});

export const getLoadingStatusDefinition = (loadingStatus: LoadingStatus) => {
  const isIdle = loadingStatus === loadingStatuses.IDLE;

  const isDone = loadingStatus === loadingStatuses.DONE;

  const isPending = loadingStatus === loadingStatuses.PENDING;

  const isFailed = loadingStatus === loadingStatuses.FAILED;

  const isNotDoneAndNotPending = !isDone && !isPending;

  return {
    isIdle,
    isPending,
    isDone,
    isFailed,
    isNotDoneAndNotPending,
  };
};

export const getFormattedNumberWithSpaces = (number: number) => {
  const roundedAmount = Math.round(number);

  return roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const getRocketPageUrl = (rocketId: Id) =>
  `${routes.ROCKET}/${rocketId}`;

export const getIsClient = () => typeof window !== 'undefined';

export const wait = (delay = 1500) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

export const logInStorage = (key: string | number) => {
  if (!getIsClient()) return;
  localStorage.setItem(`${key} ${crypto.randomUUID().slice(0, 5)}`, 'render');
};
