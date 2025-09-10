import type { Id, Url } from './general';

export type Landpad = {
  id: Id;
  launches: Id[];
  images: {
    large: Url[];
  };
  name: string;
  full_name: string;
  status: string;
  type: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  landing_attempts: number;
  landing_successes: number;
  wikipedia: string;
  details: string;
};
