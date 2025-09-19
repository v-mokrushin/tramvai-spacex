import { useNavigate } from '@tramvai/module-router';
import { routes } from '~shared/constants';
import type { Rocket } from '~shared/types';

export const useNavigation = () => {
  const navigate = useNavigate();

  const toMain = () => {
    navigate(routes.MAIN);
  };

  const toRockets = () => {
    navigate(routes.ROCKETS);
  };

  const toRocket = (rocketId: Rocket['id']) => {
    navigate(`${routes.ROCKET}/${rocketId}`);
  };

  const toLaunches = () => {
    navigate(routes.LAUNCHES);
  };

  return { toMain, toRockets, toRocket, toLaunches };
};
