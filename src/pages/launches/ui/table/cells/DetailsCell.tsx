import type { FC } from 'react';
import type { BodyCellProps } from '../../../lib/types';

export const DetailsCell: FC<BodyCellProps> = ({
  row: {
    item: { details },
  },
}) => {
  // TODO

  return <span>{details}</span>;
};
