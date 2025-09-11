import { loadRockets } from './actions/loadRockets';
import { useSelectItems, useSelectLoadingStatus } from './model/selectors';

export const rocketsModel = {
  loadRockets,
  selectors: {
    useSelectItems,
    useSelectLoadingStatus,
  },
};
