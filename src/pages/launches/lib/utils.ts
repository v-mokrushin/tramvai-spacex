import { HeaderCell } from '../ui/table/cells/HeaderCell';
import { NumberCell } from '../ui/table/cells/NumberCell';
import type { Column } from './types';

export const getColumns = (): Column[] => {
  return [
    {
      id: 'number',
      width: 40,
      headerCell: HeaderCell,
      bodyCell: NumberCell,
      headerTitle: '№',
    },
  ];
};
