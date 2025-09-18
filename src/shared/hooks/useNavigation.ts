import { useNavigate } from '@tramvai/module-router';
import { ROUTES } from '~shared/constants';
import type { Rocket } from '~shared/types';

export const useNavigation = () => {
  const navigate = useNavigate();

  const toRockets = () => {
    navigate(ROUTES.rockets);
  };

  const toRocket = (rocketId: Rocket['id']) => {
    navigate(`${ROUTES.rocket}/${rocketId}`);
  };

  const toLaunches = () => {
    navigate(ROUTES.launches);
  };

  return { toRockets, toRocket, toLaunches };
};
