import type { FC } from 'react';
import { Tooltip } from '@mui/material';
import type { BodyCellProps } from '../../../../lib/types';

import styles from './DetailsCell.module.css';

export const DetailsCell: FC<BodyCellProps> = ({
  row: {
    item: { details },
  },
}) => {
  return (
    <Tooltip title={details} arrow>
      <span className={styles.label}>{details}</span>
    </Tooltip>
  );
};
