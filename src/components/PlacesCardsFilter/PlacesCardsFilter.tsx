import {ReactElement} from 'react';

import type {PlacesCardType} from '../../types/PlacesCardType';
import type {PlacesVariantType} from '../../types/PlacesVariantType';
import type {CityType} from '../../types/CitiesType';
import {PlacesCard} from '../PlacesCard';
import {PlacesFoundResults} from '../PlacesFoundResults';

type PlacesCardListProps = {
  places: PlacesCardType[];
  city: CityType;
  variant: PlacesVariantType;
  showPlacesFound?: boolean;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
};

export function PlacesCardList({
  places,
  city,
  variant,
  showPlacesFound = false,
  onMouseEnter,
  onMouseLeave
}: PlacesCardListProps): ReactElement {
  return (
    <>
      {showPlacesFound && city && (
        <PlacesFoundResults places={places} city={city}/>
      )}
      <div className={`${variant}__list places__list tabs__content`}>
        {places.map((place) => (
          <PlacesCard key={place.id}{...place} variant={variant} onMouseEnter={() => onMouseEnter?.(place.id)} onMouseLeave={onMouseLeave}/>
        ))}
      </div>
    </>
  );
}
