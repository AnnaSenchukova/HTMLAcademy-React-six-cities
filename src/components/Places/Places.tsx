import {ReactElement} from 'react';

import {mockPlacesCard} from '../../mocks/mockPlacesCard';
import {PlacesCardsList} from '../PlacesCardsList';
import {PlacesSorting} from '../PlacesSorting';

type PlacesProps = {
  city?: string;
}

export function Places({ city = 'Amsterdam'}: PlacesProps): ReactElement {
  const filteredPlaces = mockPlacesCard.filter((place) => place.city.name === city);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredPlaces.length} places to stay in {city}</b>
      <PlacesSorting />
      <PlacesCardsList places={filteredPlaces}/>
    </section>
  );
}
