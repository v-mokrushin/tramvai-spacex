import type { UniversalErrorBoundaryFallbackProps } from '@tramvai/react';
import type { FC } from 'react';
import { PageLayout } from '~shared/ui';
import { isNotFoundError } from '@tinkoff/errors';

export const DefaultFallback: FC<UniversalErrorBoundaryFallbackProps> = ({
  url,
  error,
}) => {
  if (isNotFoundError(error)) {
    <PageLayout title="Errorsss">
      <div>isNotFoundError</div>
    </PageLayout>;
  }

  return (
    <PageLayout title="Error ((">
      <div>DefaultFallback</div>
      <div>{url?.path}</div>
    </PageLayout>
  );
};
