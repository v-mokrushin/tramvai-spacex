import type { Id, IdOrNull, Url } from './general';

export type Launch = {
  id: Id;
  fairings: unknown | null;
  links: {
    patch: {
      small: Url;
      large: Url;
    };
    reddit: {
      campaign: Url | null;
      launch: Url | null;
      media: Url | null;
      recovery: Url | null;
    };
    flickr: {
      small: Url[];
      original: Url[];
    };
    presskit: Url | null;
    webcast: Url | null;
    youtube_id: Url | null;
    article: Url | null;
    wikipedia: Url | null;
  };
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  net: boolean;
  window: number | null;
  rocket: string;
  success: boolean | null;
  failures: unknown[];
  details: string | null;
  crew: CrewMember[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: IdOrNull;
};

type CrewMember = {
  crew: string;
  role: string;
};

type Core = {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean | null;
  landing_type: string | null;
  landpad: string | null;
};
