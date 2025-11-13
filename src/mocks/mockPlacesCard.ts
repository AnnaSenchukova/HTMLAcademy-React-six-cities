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
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
    city: mockCities.Amsterdam,
    details: {
      bedrooms: 3,
      guestCount: 4,
      optionsInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      hostId: 2,
      description: [
        'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
      ],
      gallery: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg', 'apartment-03.jpg', 'studio-01.jpg', 'apartment-01.jpg'],
    },
  },
  {
    id: 2,
    isFavorite: true,
    isPremium: false,
    imageSrc: 'img/room.jpg',
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    type: 'room',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
    city: mockCities.Amsterdam,
    details: {
      bedrooms: 1,
      guestCount: 2,
      optionsInside: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen', 'Fridge'],
      hostId: 3,
      description: [
        'Cozy room with wooden interior and stone accents. Perfect for solo travelers or couples.'
      ],
      gallery: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg'],
    },
  },
  {
    id: 3,
    isFavorite: false,
    isPremium: false,
    imageSrc: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: 'house',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 1
    },
    city: mockCities.Amsterdam,
    details: {
      bedrooms: 2,
      guestCount: 3,
      optionsInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Kitchen', 'Dishwasher', 'Fridge'],
      hostId: 4,
      description: [
        'Charming house with direct canal view. Enjoy the typical Amsterdam atmosphere from your window.'
      ],
      gallery: ['apartment-02.jpg', 'room.jpg', 'apartment-01.jpg', 'apartment-03.jpg'],
    },
  },
  {
    id: 4,
    isFavorite: false,
    isPremium: false,
    imageSrc: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 1
    },
    city: mockCities.Amsterdam,
    details: {
      bedrooms: 1,
      guestCount: 2,
      optionsInside: ['Wi-Fi', 'Towels', 'Heating', 'Coffee machine', 'Cabel TV', 'Fridge'],
      hostId: 5,
      description: [
        'Modern hotel-style apartment with comfortable king-size bed and all necessary amenities.'
      ],
      gallery: ['apartment-03.jpg', 'studio-01.jpg', 'room.jpg'],
    },
  },
  {
    id: 5,
    isFavorite: true,
    isPremium: true,
    imageSrc: 'img/room.jpg',
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    type: 'room',
    location: {
      latitude: 48.8558740737504,
      longitude: 2.3472439999999994,
      zoom: 1
    },
    city: mockCities.Paris,
    details: {
      bedrooms: 1,
      guestCount: 2,
      optionsInside: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen', 'Fridge'],
      hostId: 6,
      description: [
        'Unique room with wooden and stone design elements. Located in the heart of Paris.'
      ],
      gallery: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg', 'apartment-03.jpg', 'studio-01.jpg'],
    },
  },
];
