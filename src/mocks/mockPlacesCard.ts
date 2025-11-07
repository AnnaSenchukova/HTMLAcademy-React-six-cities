import type {PlacesCardType} from '../types/PlacesCardType';
import { mockCities } from './mockCities';

export const mockPlacesCard : PlacesCardType[] = [
  {
    id: 1,
    isFavorite: false,
    isPremium: true,
    imageSrc: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.4,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
    city: mockCities.Amsterdam
  },
  {
    id: 2,
    isFavorite: true,
    isPremium: false,
    imageSrc: 'img/room.jpg',
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'room',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
    city: mockCities.Amsterdam
  },
  {
    id: 3,
    isFavorite: false,
    isPremium: false,
    imageSrc: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    description: 'Canal View Prinsengracht',
    type: 'house',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 1
    },
    city: mockCities.Amsterdam
  },
  {
    id: 4,
    isFavorite: false,
    isPremium: false,
    imageSrc: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 1
    },
    city: mockCities.Amsterdam
  },
  {
    id: 5,
    isFavorite: true,
    isPremium: true,
    imageSrc: 'img/room.jpg',
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'room',
    location: {
      latitude: 48.8558740737504,
      longitude: 2.3472439999999994,
      zoom: 1
    },
    city: mockCities.Paris
  },
];
