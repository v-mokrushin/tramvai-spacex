import { launchesModel } from '~entities/launches';
import type { PaginationProps } from '@mui/material';
import { Pagination } from '@mui/material';
import styles from './PaginationBar.module.css';

const { usePagination } = launchesModel;

export const PaginationBar = () => {
  const { page, totalDocs, totalPages } = usePagination();

  const onChangePageHandler: PaginationProps['onChange'] = (_, page) => {};

  return (
    <div className={styles.container}>
      <Pagination
        variant="outlined"
        count={totalPages}
        page={page}
        onChange={onChangePageHandler}
      />
    </div>
  );
};
