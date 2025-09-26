import type { FC } from 'react';
import { Link } from '@tramvai/module-router';
import { routes } from '~shared/constants';
import { rocketsModel } from '~entities/rockets';
import type { BodyCellProps } from '../../../lib/types';

export const RocketCell: FC<BodyCellProps> = ({
  row: {
    item: { rocket: rocketId },
  },
}) => {
  const rocket = rocketsModel.useRocketById(rocketId);

  const rocketUrl = `${routes.ROCKET}/${rocketId}`;

  const rocketName = rocket?.name ?? 'Rocket';

  return <Link url={rocketUrl}>{rocketName}</Link>;
};
