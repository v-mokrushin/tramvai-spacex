import type { FC } from 'react';
import type { WithRocketProp } from '~shared/types';
import { rocketPageLocales } from '~shared/locales';
import { SpecificationsGroup } from '../specificationGroup/SpecificationGroup';
import { getSpecifications } from '../../lib/utils';
import styles from './Specifications.module.css';

export const Specifications: FC<WithRocketProp> = ({ rocket }) => {
  const { general, design, engines, payloadWeights } =
    getSpecifications(rocket);

  return (
    <div className={styles.container}>
      <SpecificationsGroup title={rocketPageLocales.GENERAL} specs={general} />
      <SpecificationsGroup title={rocketPageLocales.DESIGN} specs={design} />
      <SpecificationsGroup title={rocketPageLocales.ENGINES} specs={engines} />
      <SpecificationsGroup
        title={rocketPageLocales.PAYLOAD_WEIGHTS}
        specs={payloadWeights}
      />
    </div>
  );
};
