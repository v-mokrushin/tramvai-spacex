import type { FC } from 'react';
import { Link } from '@tramvai/module-router';
import { routes } from '~shared/constants';
import type { BodyCellProps } from '../../../lib/types';

export const RocketCell: FC<BodyCellProps> = ({
  row: {
    item: { rocket },
  },
}) => {
  const rocketUrl = `${routes.ROCKET}/${rocket}`;

  return <Link url={rocketUrl}>Rocket</Link>;
};
