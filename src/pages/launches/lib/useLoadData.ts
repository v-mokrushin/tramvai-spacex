import { useEffect } from 'react';
import { launchesModel } from '~entities/launches';
import { rocketsModel } from '~entities/rockets';

export const useLoadData = () => {
  const loadLaunches = launchesModel.useLoadLaunchesDispatcher();

  const loadRockets = rocketsModel.useLoadRocketsDispatcher();

  const { isNotDoneAndNotPending } = rocketsModel.useLoadingStatus();

  useEffect(() => {
    loadLaunches();

    if (isNotDoneAndNotPending) loadRockets();
  }, []);
};
