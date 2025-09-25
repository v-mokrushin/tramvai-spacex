import type { Launch, LoadingStatus } from '~shared/types';

export type LaunchesState = {
  launches: Launch[];
  loadingStatus: LoadingStatus;
  pagination: Pagination;
};

type Pagination = {
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

export type LoadLaunchesResponsePayload = Pagination & {
  docs: Launch[];
};
