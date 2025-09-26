import {ReactElement} from 'react';

import {PlacesCard} from '../PlacesCard';
import {PlacesCardType} from '../../types/PlacesCardType';

type PlacesCardsListNearProps = {
  places: PlacesCardType[];
};

export function PlacesCardsListNear({places}: PlacesCardsListNearProps):ReactElement {
  return (
    <div className="near-places__list places__list">
      {places.map((place) => (
        <div key={place.id}>
          <PlacesCard {...place} />
        </div>
      ))}
    </div>
  );
}
