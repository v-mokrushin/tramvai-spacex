import type { Rocket } from '~shared/types';
import { getFormattedNumberWithSpaces } from '~shared/utils';
import type { SpecificationGroupData } from './types';

export const getKeyMetrics = (rocket: Rocket): SpecificationGroupData => {
  const metics: SpecificationGroupData = [
    { key: 'name', label: 'Name', value: rocket.name },
    {
      key: 'company',
      label: 'Company',
      value: rocket.company,
    },
    {
      key: 'country',
      label: 'Country',
      value: rocket.country,
    },
    { key: 'firstFlight', label: 'First flight', value: rocket.first_flight },
    {
      key: 'active',
      label: 'Activity',
      value: rocket.active ? 'Active' : 'Inactive',
    },
    {
      key: 'successRate',
      label: 'Success rate',
      value: `${rocket.success_rate_pct} %`,
    },
    {
      key: 'costPerLaunch',
      label: 'Cost per launch',
      value: `${getFormattedNumberWithSpaces(rocket.cost_per_launch)} $`,
    },
  ];

  return metics;
};

// export const getPayloadWeightsMetrics = (rocket: Rocket): SpecificationGroupData => {
//   const metics: SpecificationGroupData = [
//     { key: '', label: '', value: rocket.payload_weights },
//     { key: '', label: '', value: rocket. },
//     { key: '', label: '', value: rocket. },
//     { key: '', label: '', value: rocket. },
//     { key: '', label: '', value: rocket. },

//   ];

//   return metics;
// };

export const getEnginesMetrics = ({
  engines,
}: Rocket): SpecificationGroupData => {
  const metics: SpecificationGroupData = [
    { key: 'number', label: 'Number', value: engines.number },
    { key: 'layout', label: 'Layout', value: engines.layout },
    { key: 'type', label: 'Type', value: engines.type },
    { key: 'version', label: 'Version', value: engines.version },
    {
      key: 'thrust_to_weight',
      label: 'Thrust to weight',
      value: engines.thrust_to_weight,
    },
    {
      key: 'propellant_1',
      label: 'Propellant 1',
      value: engines.propellant_1,
    },
    {
      key: 'propellant_2',
      label: 'Propellant 2',
      value: engines.propellant_2,
    },
    {
      key: 'engine_loss_max',
      label: 'Engine loss max',
      value: engines.engine_loss_max,
    },
    {
      key: 'isp_sea_level',
      label: 'Isp (sea level)',
      value: engines.isp.sea_level,
    },
    {
      key: 'isp_vacuum',
      label: 'Isp (vacuum)',
      value: engines.isp.vacuum,
    },
    {
      key: 'thrust_sea_level',
      label: 'Thrust (sea level)',
      value: `${getFormattedNumberWithSpaces(engines.thrust_sea_level.kN)} kN / ${getFormattedNumberWithSpaces(engines.thrust_sea_level.lbf)} lbf`,
    },
    {
      key: 'thrust_vacuum',
      label: 'Thrust (vacuum)',
      value: `${getFormattedNumberWithSpaces(engines.thrust_vacuum.kN)} kN / ${getFormattedNumberWithSpaces(engines.thrust_vacuum.lbf)} lbf`,
    },
    // {
    //   key: 'thrust_vacuum',
    //   label: 'Thrust (vacuum)',
    //   value: engines.thrust_vacuum,
    // },
    // {
    //   key: '',
    //   label: ')',
    //   value: engines.,
    // },
    // {
    //   key: '',
    //   label: ')',
    //   value: engines.,
    // },
  ];

  return metics.filter(({ value }) => Boolean(value));
};
