import {ReactElement, useRef} from 'react';
import { CityType } from '../../types/CitiesType';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityType;
}

export function Map({city}: MapProps):ReactElement {
  const mapRef = useRef(null);
  return (
    <section className="cities__map map"></section>
  );
}
