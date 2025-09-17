import type { FC } from 'react';
import styles from './SpecificationGroup.module.css';
import type { SpecificationGroupData } from '../../lib/types';

type SpecificationsGroupProps = {
  title: string;
  specs: SpecificationGroupData;
};

export const SpecificationsGroup: FC<SpecificationsGroupProps> = ({
  title,
  specs,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.specsContainer}>
        {specs.map(({ key, label, value }) => (
          <>
            <div key={key} className={styles.specContainer}>
              <span>{label}</span>
              <span>{value}</span>
            </div>
            <div className={styles.rowDivider} />
          </>
        ))}
      </div>
    </div>
  );
};
