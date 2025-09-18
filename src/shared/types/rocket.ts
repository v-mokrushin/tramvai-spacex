import type { Id } from './general';

export type Rocket = {
  id: Id;
  height: Length;
  diameter: Length;
  mass: Mass;
  first_stage: {
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
  };
  second_stage: {
    thrust: Thrust;
    payloads: {
      composite_fairing: {
        height: Length;
        diameter: Length;
      };
      option_1: string;
    };
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
  };
  engines: {
    isp: {
      sea_level: number;
      vacuum: number;
    };
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
    number: number;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_to_weight: number;
  };
  landing_legs: {
    number: number;
    material: string | null;
  };
  payload_weights: PayloadWeight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
};

export type WithRocketProp<T extends object = object> = T & { rocket: Rocket };

type Length = {
  meters: number;
  feet: number;
};

type Mass = {
  kg: number;
  lb: number;
};

type Thrust = {
  kN: number;
  lbf: number;
};

type PayloadWeight = {
  id: string;
  name: string;
  kg: number;
  lb: number;
};
