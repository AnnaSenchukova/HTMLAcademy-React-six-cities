export type PlacesCardType = {
  id: number;
  isAddToBookmark: boolean;
  isPremium?: boolean;
  imageSrc: string;
  price: number;
  rating: number;
  description: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  city: {
    name: string;
  };
}
