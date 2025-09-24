import {ReactElement, useState} from 'react';

import type {PlacesCardType} from '../../types/PlacesCardType';

import {PlacesCard} from '../PlacesCard';

type PlacesCardsListProps = {
  places: PlacesCardType[];
};

export function PlacesCardsList({places}:PlacesCardsListProps): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <div
          key={place.id}
          onMouseMove={() => handleCardMouseMove(place.id)}
          onMouseLeave={handleCardMouseLeave}
        >
          <PlacesCard {...place} />
        </div>
      ))}
    </div>
  );
}
