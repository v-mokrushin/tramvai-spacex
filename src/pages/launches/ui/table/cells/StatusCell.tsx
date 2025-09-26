import type { FC } from 'react';
import type { BodyCellProps } from '../../../lib/types';

export const StatusCell: FC<BodyCellProps> = ({
  row: {
    item: { success },
  },
}) => {
  // TODO
  const label = success ? 'Success' : 'Failed';

  return <span>{label}</span>;
};
