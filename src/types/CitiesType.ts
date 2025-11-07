import type { LocationType } from './LocationType';

export type CityName = 'Amsterdam' | 'Paris';

export type CityType = {
  name: CityName;
  location: LocationType;
};