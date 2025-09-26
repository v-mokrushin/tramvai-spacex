import type { FC } from 'react';
import type { BodyCellProps } from '../../../lib/types';

export const NameCell: FC<BodyCellProps> = ({
  row: {
    item: { name },
  },
}) => {
  return <span title={name}>{name}</span>;
};
