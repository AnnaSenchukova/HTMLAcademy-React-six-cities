import type {LocationType} from './LocationType';

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
  city: {
    name: string;
    location: LocationType,
  };
}
