import type { Column } from './types';
import { HeaderCell } from '../ui/table/cells/HeaderCell';
import { NumberCell } from '../ui/table/cells/NumberCell';
import { NameCell } from '../ui/table/cells/NameCell';
import { DateCell } from '../ui/table/cells/DateCell';

export const tableColumns: Column[] = [
  {
    id: 'number',
    width: 60,
    headerTitle: '№',
    headerCell: HeaderCell,
    bodyCell: NumberCell,
  },
  {
    id: 'name',
    headerTitle: 'Mission name',
    width: 250,
    headerCell: HeaderCell,
    bodyCell: NameCell,
  },
  {
    id: 'date',
    headerTitle: 'Date UTC',
    width: 160,
    headerCell: HeaderCell,
    bodyCell: DateCell,
  },
];
