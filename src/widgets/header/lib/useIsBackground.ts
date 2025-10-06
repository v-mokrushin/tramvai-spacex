import { useRoute } from '@tramvai/module-router';
import { NOT_FOUND_PAGE_NAME, routes } from '~shared/constants';

export const useIsBackground = () => {
  const { path, name } = useRoute();

  return path !== routes.HOME && name !== NOT_FOUND_PAGE_NAME;
};
