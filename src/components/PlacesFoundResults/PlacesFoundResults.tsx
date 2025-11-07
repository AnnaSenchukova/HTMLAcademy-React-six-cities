import {ReactElement} from 'react';
import {PlacesCardType} from '../../types/PlacesCardType';
import {CityType} from '../../types/CitiesType';

type PlacesFoundResultsProps = {
  places: PlacesCardType[];
  city: CityType;
}

export function PlacesFoundResults({ places, city }: PlacesFoundResultsProps): ReactElement {
  return (
    <b className="places__found">{places.length} places to stay in {city.name}</b>
  );
}
