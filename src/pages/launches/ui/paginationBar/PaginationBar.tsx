import { launchesModel } from '~entities/launches';
import type { PaginationProps } from '@mui/material';
import { Pagination } from '@mui/material';
import styles from './PaginationBar.module.css';

const { usePagination, useLoadingStatus, useLoadLaunchesDispatcher } =
  launchesModel;

export const PaginationBar = () => {
  const { page, totalPages } = usePagination();

  const { isDone } = useLoadingStatus();

  const loadLaunches = useLoadLaunchesDispatcher();

  const onChangePageHandler: PaginationProps['onChange'] = (_, page) => {
    loadLaunches(page);
  };

  return (
    <div className={styles.container}>
      <Pagination
        variant="outlined"
        count={totalPages}
        page={page}
        onChange={onChangePageHandler}
        disabled={!isDone}
      />
    </div>
  );
};
