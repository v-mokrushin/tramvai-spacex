import { useEffect } from 'react';
import { launchesModel } from '~entities/launches';

export const useLoadData = () => {
  const loadLaunches = launchesModel.useLoadLaunchesDispatcher();

  useEffect(() => {
    loadLaunches();
  }, []);
};
