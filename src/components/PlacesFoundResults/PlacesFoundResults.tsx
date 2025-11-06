import {ReactElement} from 'react';
import {PlacesCardType} from '../../types/PlacesCardType';

type PlacesFoundResultsProps = {
  places: PlacesCardType[];
  city: string;
}

export function PlacesFoundResults({ places, city }: PlacesFoundResultsProps): ReactElement {
  return (
    <b className="places__found">{places.length} places to stay in {city}</b>
  );
}
