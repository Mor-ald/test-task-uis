/**
 * Item of the result of a response from the Meters API
 */
export interface CountersMetersData {
  id: string;
  _type: ['ColdWaterAreaMeter' | 'HotWaterAreaMeter', 'AreaMeter'];
  area: {
    id: string;
  };
  is_automatic: boolean | null;
  communication: string;
  description: string;
  serial_number: string;
  installation_date: string;
  brand_name: string | null;
  model_name: string | null;
  initial_values: [number];
}

/**
 * The result of a response from the Meters API
 */
export type CountersMetersDataResult = CountersMetersData[];

/**
 * Response from the Meters API
 */
export interface CountersMetersApiData {
  count: number;
  next: string | null;
  previous: string | null;
  results: CountersMetersDataResult;
}

/**
 * Item of the result of a response from the Areas API
 */
export interface CountersAreasData {
  id: string;
  number: number;
  str_number: string;
  str_number_full: string;
  house: {
    address: string;
    id: string;
    fias_addrobjs: [string, string];
  };
}

/**
 * The result of a response from the Areas API
 */
export type CountersAreasDataResult = CountersAreasData[];

/**
 * Response from the Areas API
 */
export interface CountersAreasApiData {
  count: number;
  next: string | null;
  previous: string | null;
  results: CountersAreasDataResult;
}
