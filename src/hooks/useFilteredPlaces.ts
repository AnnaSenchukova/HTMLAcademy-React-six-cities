import type { PlacesCardType } from '../types/PlacesCardType';
import type { CityType } from '../types/CitiesType';


export function useFilteredPlaces(places: PlacesCardType[], city: CityType): PlacesCardType[] {
  return places.filter((place) => place.city.name === city.name);
}
