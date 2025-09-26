import type { Column } from './types';
import { HeaderCell } from '../ui/table/cells/HeaderCell';
import { NumberCell } from '../ui/table/cells/NumberCell';
import { NameCell } from '../ui/table/cells/NameCell';
import { DateCell } from '../ui/table/cells/DateCell';
import { StatusCell } from '../ui/table/cells/StatusCell';
import { DetailsCell } from '../ui/table/cells/detailsCell/DetailsCell';
import { RocketCell } from '../ui/table/cells/RocketCell';

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
    width: 180,
    headerCell: HeaderCell,
    bodyCell: DateCell,
  },
  {
    id: 'status',
    headerTitle: 'Status',
    width: 100,
    headerCell: HeaderCell,
    bodyCell: StatusCell,
  },
  {
    id: 'rocket',
    headerTitle: 'Rocket',
    width: 110,
    headerCell: HeaderCell,
    bodyCell: RocketCell,
  },
  {
    id: 'details',
    headerTitle: 'Details',
    width: 800,
    headerCell: HeaderCell,
    bodyCell: DetailsCell,
  },
];
