import {ReactElement} from 'react';
import { CityType } from '../../types/CitiesType';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityType;
}

export function Map({city}: MapProps):ReactElement {
  return (
    <section className="cities__map map"></section>
  );
}
