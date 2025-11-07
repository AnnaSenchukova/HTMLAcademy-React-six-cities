import {ReactElement, useRef, useEffect} from 'react';
import { CityType } from '../../types/CitiesType';
import { PlacesCardType } from '../../types/PlacesCardType';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';


type MapProps = {
  city: CityType;
  places: PlacesCardType[];
}

export function Map({city, places}: MapProps):ReactElement {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    if (map) {
      const defaultCustomIcon = leaflet.icon({
        iconUrl: '/img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      places.filter((place) => place.city.name === city.name).forEach((place) => {
        leaflet
          .marker({
            lat: place.location.latitude,
            lng: place.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, places, city]);


  return (
    <section className="cities__map map" ref={mapRef} style={{ minHeight: '500px' }}></section>
  );
}
