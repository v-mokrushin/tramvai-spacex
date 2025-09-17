import type { FC } from 'react';
import type { Rocket } from '~shared/types';
import { SpecificationsGroup } from '../specificationGroup/SpecificationGroup';
import { getSpecs } from '../../lib/utils';
import styles from './Specifications.module.css';

type SpecificationsProps = {
  rocket: Rocket;
};

export const Specifications: FC<SpecificationsProps> = ({ rocket }) => {
  const specs = getSpecs(rocket);

  return (
    <div className={styles.container}>
      <SpecificationsGroup title="General" specs={specs.general} />
      <SpecificationsGroup title="Design" specs={specs.design} />
      <SpecificationsGroup title="Engines" specs={specs.engines} />
      <SpecificationsGroup
        title="Payload weights"
        specs={specs.payloadWeights}
      />
    </div>
  );
};
