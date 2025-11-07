import {ReactElement, useRef} from 'react';
import { CityType } from '../../types/CitiesType';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  city: CityType;
}

export function Map({city}: MapProps):ReactElement {
  const mapRef = useRef(null);
  useMap(mapRef, city.location);

  return (
    <section className="cities__map map" ref={mapRef} style={{ minHeight: '500px' }}></section>
  );
}
