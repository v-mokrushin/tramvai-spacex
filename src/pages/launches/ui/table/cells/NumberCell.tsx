import type { FC } from 'react';
import { launchesModel } from '~entities/launches';
import type { BodyCellProps } from '../../../lib/types';

export const NumberCell: FC<BodyCellProps> = ({ row }) => {
  const { page, limit } = launchesModel.usePagination();

  const index = limit * (page - 1) + (row.index + 1);

  return (
    <div>
      <span>{index}</span>
      {/* <span>{row.item.flight_number}</span> */}
    </div>
  );
};
