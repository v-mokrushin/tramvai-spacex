import { useNavigate } from '@tramvai/module-router';
import { ROUTES } from '~shared/constants';

export const useNavigation = () => {
  const navigate = useNavigate();

  const toRockets = () => {
    navigate(ROUTES.rockets);
  };

  return { toRockets };
};
