import type { loadingStatuses } from '../constants';

import type { ObjectValues } from './utils';

export type Id = string;

export type Ids = Array<Id>;

export type Url = string;

export type Urls = Array<Url>;

export type IdOrNull = Id | null;

export type LoadingStatus = ObjectValues<typeof loadingStatuses>;
