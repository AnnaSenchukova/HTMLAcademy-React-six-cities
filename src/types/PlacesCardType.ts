import type {LocationType} from './LocationType';
import type { CityType } from './CitiesType';

export type PlacesCardType = {
  id: number;
  isFavorite: boolean;
  isPremium?: boolean;
  imageSrc: string;
  price: number;
  rating: number;
  description: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  location: LocationType,
  city: CityType;
}
