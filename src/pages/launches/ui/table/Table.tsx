import { launchesModel } from '~entities/launches';
import { animations } from '~shared/constants';
import { tableColumns } from '../../lib/config';
import styles from './Table.module.css';

export const Table = () => {
  const data = launchesModel.useLaunches();

  const { page } = launchesModel.usePagination();

  return (
    <div className={styles.table}>
      <div className={styles.headerRow}>
        {tableColumns.map((column) => (
          <div
            key={column.id}
            className={styles.headerCell}
            style={{ width: column.width }}
          >
            <column.headerCell column={{ headerTitle: column.headerTitle }} />
          </div>
        ))}
      </div>
      <div key={page} className={animations.FADE_IN}>
        {data.map((item, rowIndex) => (
          <div key={item.id} className={styles.bodyRow}>
            {tableColumns.map((column) => (
              <div
                key={column.id}
                className={styles.bodyCell}
                style={{ width: column.width }}
              >
                <column.bodyCell
                  row={{ index: rowIndex, item }}
                  column={{ headerTitle: column.headerTitle }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
