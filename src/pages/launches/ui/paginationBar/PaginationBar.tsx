import { launchesModel } from '~entities/launches';
import { Pagination } from '@mui/material';
import styles from './PaginationBar.module.css';
import { useOnChangeHandler } from './useOnChangeHandler';

export const PaginationBar = () => {
  const { page, totalPages } = launchesModel.usePagination();

  const { isDone } = launchesModel.useLoadingStatus();

  const onChangePageHandler = useOnChangeHandler();

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
