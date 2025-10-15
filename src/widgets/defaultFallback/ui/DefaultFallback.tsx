import type { UniversalErrorBoundaryFallbackProps } from '@tramvai/react';
import type { FC } from 'react';
import { CenteredErrorMessage } from '~shared/ui';
import { generalLocales } from '~shared/locales';

export const DefaultFallback: FC<UniversalErrorBoundaryFallbackProps> = () => {
  return <CenteredErrorMessage title={generalLocales.RUNTIME_ERROR} />;
};
