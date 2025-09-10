import { declareAction } from '@tramvai/core';
import { rocketsIsLoading } from '../model/events';

export const loadRockets = declareAction({
  name: 'loadRockets',
  async fn() {
    this.dispatch(rocketsIsLoading());

    // try {
    // //   const result = await fetch();
    // } catch (error) {

    // }
  },
});
