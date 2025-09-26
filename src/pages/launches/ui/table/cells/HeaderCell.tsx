import type { FC } from 'react';
import type { HeaderCellProps } from '../../../lib/types';

export const HeaderCell: FC<HeaderCellProps> = ({ column }) => {
  return (
    <div>
      <span>{column.headerTitle}</span>
    </div>
  );
};
