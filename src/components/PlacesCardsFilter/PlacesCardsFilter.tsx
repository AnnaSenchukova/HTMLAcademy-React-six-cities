import {ReactElement} from 'react';

import type {PlacesCardType} from '../../types/PlacesCardType';
import {PlacesCardWithHover} from '../PlacesCardWithHover';
import {PlacesFoundResults} from '../PlacesFoundResults';

type PlacesCardsFilterProps = {
  places: PlacesCardType[];
  city: string;
  variant: 'cities' | 'favorites' | 'near-places';
  showPlacesFound?: boolean;
};

export function PlacesCardsFilter({
  places,
  city,
  variant,
  showPlacesFound = false
}: PlacesCardsFilterProps): ReactElement {
  const filteredPlaces = places.filter((place) => place.city.name === city);

  return (
    <>
      {showPlacesFound && city && (
        <PlacesFoundResults places={filteredPlaces} city={city}/>
      )}
      <div className={`${variant}__list places__list tabs__content`}>
        {filteredPlaces.map((place) => (
          <PlacesCardWithHover key={place.id} {...place} variant={variant} />
        ))}
      </div>
    </>
  );
}
