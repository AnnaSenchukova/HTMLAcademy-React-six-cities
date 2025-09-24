import type {PlacesCardProps} from '../types/PlacesCardProps';

export const mockPlacesCard : PlacesCardProps[] = [
  {
    id: 1,
    isAddToBookmark: false,
    isPremium: true,
    imageSrc: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.4,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 2,
    isAddToBookmark: true,
    isPremium: false,
    imageSrc: 'img/room.jpg',
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'room',
    city: {
      name: 'Paris'
    }
  },
  {
    id: 3,
    isAddToBookmark: false,
    isPremium: false,
    imageSrc: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    description: 'Canal View Prinsengracht',
    type: 'house',
    city: {
      name: 'Paris'
    }
  },
  {
    id: 4,
    isAddToBookmark: false,
    isPremium: false,
    imageSrc: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 5,
    isAddToBookmark: true,
    isPremium: true,
    imageSrc: 'img/room.jpg',
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'room',
    city: {
      name: 'Amsterdam'
    }
  },
];
