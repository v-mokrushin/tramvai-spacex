import type { Rocket } from '~shared/types';
import { getFormattedNumberWithSpaces } from '~shared/utils';
import type { SpecificationGroupData } from './types';

const getGeneralSpecification = ({
  name,
  company,
  country,
  first_flight,
  active,
  success_rate_pct,
  cost_per_launch,
}: Rocket): SpecificationGroupData => {
  const metics: SpecificationGroupData = [
    { key: 'name', label: 'Name', value: name },
    {
      key: 'company',
      label: 'Company',
      value: company,
    },
    {
      key: 'country',
      label: 'Country',
      value: country,
    },
    { key: 'firstFlight', label: 'First flight', value: first_flight },
    {
      key: 'active',
      label: 'Activity',
      value: active ? 'Active' : 'Inactive',
    },
    {
      key: 'success_rate_pct',
      label: 'Success rate',
      value: `${success_rate_pct} %`,
    },
    {
      key: 'cost_per_launch',
      label: 'Cost per launch',
      value: `${getFormattedNumberWithSpaces(cost_per_launch)} $`,
    },
  ];

  return metics;
};

const getEnginesSpecification = ({
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
  ];

  return metics.filter(({ value }) => Boolean(value));
};

const getDesignSpecification = ({
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

const getPayloadWeightsSpecification = ({
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
  const general = getGeneralSpecification(rocket);

  const design = getDesignSpecification(rocket);

  const engines = getEnginesSpecification(rocket);

  const payloadWeights = getPayloadWeightsSpecification(rocket);

  return { general, design, engines, payloadWeights };
};
