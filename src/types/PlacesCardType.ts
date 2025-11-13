import type {LocationType} from './LocationType';
import type { CityType } from './CitiesType';
import {OfferDetailsType} from './OfferDetailsType';

export type PlacesCardType = {
  id: number;
  isFavorite: boolean;
  isPremium?: boolean;
  imageSrc: string;
  price: number;
  rating: number;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  location: LocationType;
  city: CityType;
  details: OfferDetailsType,
}
