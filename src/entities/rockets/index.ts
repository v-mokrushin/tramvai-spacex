import { loadRockets } from './actions/loadRockets';
import { useSelectItems, useSelectLoadingStatus } from './model/selectors';

export const rocketModel = {
  actions: {
    loadRockets,
  },
  selectors: {
    useSelectItems,
    useSelectLoadingStatus,
  },
};
