import type { CityType, CityName } from '../types/CitiesType';

export const mockCities: Record<CityName, CityType> = {
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
  },
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85882333950175,
      longitude: 2.3470419999999894,
      zoom: 10,
    },
  },
};
