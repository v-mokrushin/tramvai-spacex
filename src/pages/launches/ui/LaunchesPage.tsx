import { useEffect } from 'react';
import { launchesModel } from '~entities/launches';
import { generalLocales } from '~shared/locales';
import { PageLayout } from '~shared/ui';
import { Table } from './table/Table';
import { PaginationBar } from './paginationBar/PaginationBar';

export const LaunchesPage = () => {
  const loadLaunches = launchesModel.useLoadLaunchesDispatcher();

  useEffect(() => {
    loadLaunches();
  }, []);

  return (
    <>
      <PageLayout title={generalLocales.LAUNCHES}>
        <Table />
      </PageLayout>
      <PaginationBar />
    </>
  );
};
