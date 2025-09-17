import type { FC } from 'react';
import type { Rocket } from '~shared/types';
import { SpecificationsGroup } from '../specificationGroup/SpecificationGroup';
import { getEnginesMetrics, getKeyMetrics } from '../../lib/utils';
import styles from './Specifications.module.css';

type SpecificationsProps = {
  rocket: Rocket;
};

export const Specifications: FC<SpecificationsProps> = ({ rocket }) => {
  return (
    <div className={styles.container}>
      <SpecificationsGroup title="Key Metrics" specs={getKeyMetrics(rocket)} />
      <SpecificationsGroup title="Engines" specs={getEnginesMetrics(rocket)} />
    </div>
  );
};
