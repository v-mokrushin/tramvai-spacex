import { routes } from '~shared/constants';
import { generalLocales } from '~shared/locales';

type Page = {
  label: string;
  url: string;
};

export const pages: Page[] = [
  { url: routes.MAIN, label: generalLocales.HOME },
  { url: routes.ROCKETS, label: generalLocales.ROCKETS },
  { url: routes.LAUNCHES, label: generalLocales.LAUNCHES },
];
