import type { FC } from 'react';
import type { Launch } from '~shared/types';

export type HeaderCellProps = {
  column: CellColumn;
};

export type BodyCellProps = {
  row: Row;
  column: CellColumn;
};

export type Row = {
  index: number;
  item: Launch;
};

export type CellColumn = {
  headerTitle?: string;
};

export type Column = {
  id: string | number;
  width: number;
  headerCell: FC<HeaderCellProps>;
  bodyCell: FC<BodyCellProps>;
  headerTitle?: string;
};
