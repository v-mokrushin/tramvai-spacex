import { useRoute } from '@tramvai/module-router';
import { ROUTES } from '~shared/constants';
import createLogger from '@tinkoff/logger';
import { getIsClient } from '~shared/utils';

const log = createLogger('this:header');

export const useIsBackground = () => {
  const { path } = useRoute();

  log.error(`useIsBackground ${getIsClient()}`, path);

  return path !== ROUTES.main;
};
