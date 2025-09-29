import type { FC } from 'react';
import { Link } from '@tramvai/module-router';
import { rocketsModel } from '~entities/rockets';
import { getRocketPageUrl } from '~shared/utils';
import { generalLocales } from '~shared/locales';
import type { BodyCellProps } from '../../../lib/types';

export const RocketCell: FC<BodyCellProps> = ({
  row: {
    item: { rocket: rocketId },
  },
}) => {
  const rocket = rocketsModel.useRocketById(rocketId);

  const rocketUrl = getRocketPageUrl(rocketId);

  const rocketName = rocket?.name ?? generalLocales.ROCKET;

  return <Link url={rocketUrl}>{rocketName}</Link>;
};
