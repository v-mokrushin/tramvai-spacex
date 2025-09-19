import type { Rocket } from '~shared/types';
import { getFormattedNumberWithSpaces } from '~shared/utils';
import type { SpecificationGroupData } from './types';

const getGeneralSpecs = (rocket: Rocket): SpecificationGroupData => {
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

const getEnginesSpecs = ({ engines }: Rocket): SpecificationGroupData => {
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
  ];

  return metics.filter(({ value }) => Boolean(value));
};

const getDesignSpecs = ({
  mass,
  diameter,
  height,
  stages,
  boosters,
  landing_legs,
}: Rocket): SpecificationGroupData => {
  const metics: SpecificationGroupData = [
    {
      key: 'mass',
      label: 'Mass',
      value: `${getFormattedNumberWithSpaces(mass.kg)} kg / ${getFormattedNumberWithSpaces(mass.lb)} lb`,
    },
    {
      key: 'diameter',
      label: 'Diameter',
      value: `${diameter.meters} m / ${diameter.feet} ft`,
    },
    {
      key: 'height',
      label: 'Height',
      value: `${height.meters} m / ${height.feet} ft`,
    },
    { key: 'stages', label: 'Stages', value: stages },
    { key: 'boosters', label: 'Boosters', value: `${boosters || 'no'}` },
    {
      key: 'landing_legs',
      label: 'Landing legs',
      value: landing_legs.number
        ? `${landing_legs.number} / ${landing_legs.material}`
        : `no`,
    },
  ];

  return metics;
};

const getPayloadWeightsSpecs = ({
  payload_weights,
}: Rocket): SpecificationGroupData => {
  const metics: SpecificationGroupData = payload_weights.map(
    ({ id, name, kg, lb }) => ({
      key: id,
      label: name,
      value: `${getFormattedNumberWithSpaces(kg)} kg / ${getFormattedNumberWithSpaces(lb)} lb`,
    })
  );

  return metics;
};

export const getSpecifications = (rocket: Rocket) => {
  const general = getGeneralSpecs(rocket);

  const design = getDesignSpecs(rocket);

  const engines = getEnginesSpecs(rocket);

  const payloadWeights = getPayloadWeightsSpecs(rocket);

  return { general, design, engines, payloadWeights };
};
