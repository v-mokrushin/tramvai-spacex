import { generalLocales } from '~shared/locales';
import { PageLayout } from '~shared/ui';
import { Table } from './table/Table';
import { PaginationBar } from './paginationBar/PaginationBar';
import { useLoadData } from '../lib/useLoadData';

export const LaunchesPage = () => {
  useLoadData();

  return (
    <>
      <PageLayout title={generalLocales.LAUNCHES}>
        <Table />
      </PageLayout>
      <PaginationBar />
    </>
  );
};
