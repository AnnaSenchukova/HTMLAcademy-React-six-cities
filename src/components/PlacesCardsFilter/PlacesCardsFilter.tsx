import {ReactElement} from 'react';

import type {PlacesCardType} from '../../types/PlacesCardType';
import type {PlacesVariantType} from '../../types/PlacesVariantType';
import type {CityType} from '../../types/CitiesType';
import {PlacesCardWithHover} from '../PlacesCardWithHover';
import {PlacesFoundResults} from '../PlacesFoundResults';

type PlacesCardsFilterProps = {
  places: PlacesCardType[];
  city: CityType;
  variant: PlacesVariantType;
  showPlacesFound?: boolean;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
};

export function PlacesCardsFilter({
  places,
  city,
  variant,
  showPlacesFound = false,
  onMouseEnter,
  onMouseLeave
}: PlacesCardsFilterProps): ReactElement {
  return (
    <>
      {showPlacesFound && city && (
        <PlacesFoundResults places={places} city={city}/>
      )}
      <div className={`${variant}__list places__list tabs__content`}>
        {places.map((place) => (
          <PlacesCardWithHover key={place.id}{...place} variant={variant} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
        ))}
      </div>
    </>
  );
}
