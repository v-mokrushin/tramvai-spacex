import type { FC } from 'react';
import type { BodyCellProps } from '../../../lib/types';
import { getFormattedDateUTC } from '../../../lib/utils';

export const DateCell: FC<BodyCellProps> = ({
  row: {
    item: { date_utc },
  },
}) => {
  const formattedDate = getFormattedDateUTC(date_utc);

  return <span>{formattedDate}</span>;
};
