import {ReactElement, useRef, useEffect} from 'react';
import { CityType } from '../../types/CitiesType';
import { PlacesCardType } from '../../types/PlacesCardType';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';


type MapProps = {
  city: CityType;
  places: PlacesCardType[];
  activeCardId?: number | null;
}

export function Map({city, places, activeCardId}: MapProps):ReactElement {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    if (map) {
      const defaultCustomIcon = leaflet.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const currentCustomIcon = leaflet.icon({
        iconUrl: 'img/pin-active.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      // Очищаем все существующие маркеры
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      // Добавляем новые маркеры
      places.filter((place) => place.city.name === city.name).forEach((place) => {
        const isActive = place.id === activeCardId;
        leaflet
          .marker({
            lat: place.location.latitude,
            lng: place.location.longitude,
          }, {
            icon: isActive ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, places, city, activeCardId]);


  return (
    <section className="cities__map map" ref={mapRef} style={{ minHeight: '500px' }}></section>
  );
}
