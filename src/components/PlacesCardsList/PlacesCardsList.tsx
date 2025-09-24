import {ReactElement} from 'react';

import type {PlacesCardProps} from '../../types/PlacesCardProps';

import {PlacesCard} from '../PlacesCard';

type PlacesCardsListProps = {
  places: PlacesCardProps[];
};

export function PlacesCardsList({places}:PlacesCardsListProps): ReactElement {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <PlacesCard
          key={place.id}
          {...place}
        />
      ))}
    </div>
  );
}
