import type { UniversalErrorBoundaryFallbackProps } from '@tramvai/react';
import type { FC } from 'react';
import { PageLayout } from '~shared/ui';

export const DefaultFallback: FC<UniversalErrorBoundaryFallbackProps> = ({
  url,
}) => {
  return (
    <PageLayout title="Error ((">
      <div>DefaultFallback</div>
      <div>{url?.path}</div>
    </PageLayout>
  );
};
