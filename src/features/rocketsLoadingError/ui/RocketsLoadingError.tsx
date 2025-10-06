import { useActions } from '@tramvai/state';
import { rocketsModel } from '~entities/rockets';
import { generalLocales } from '~shared/locales';
import { CenteredErrorMessage } from '~shared/ui';

export const RocketsLoadingError = () => {
  const loadRockets = useActions(rocketsModel.loadRocketsAction);

  return (
    <CenteredErrorMessage
      title={generalLocales.LOADING_FAILED}
      isReloadButtonVisible
      onClickReloadButton={loadRockets}
    />
  );
};
