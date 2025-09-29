import type { PaginationProps } from '@mui/material';
import { launchesModel } from '~entities/launches';

export const useOnChangeHandler = () => {
  const loadLaunches = launchesModel.useLoadLaunchesDispatcher();

  const onChangePageHandler: PaginationProps['onChange'] = (_, page) => {
    loadLaunches(page);
  };

  return onChangePageHandler;
};
