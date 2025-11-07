import {useEffect, useRef, RefObject} from 'react';
import leaflet from 'leaflet';
import type { LocationType } from '../types/LocationType';

function useMap(mapRef: RefObject<HTMLElement | null>, city: LocationType) {
  const map = useRef<leaflet.Map | null>(null);
  const isRendered = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRendered.current) {

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      map.current = instance;
      isRendered.current = true;
    }
  }, [mapRef, city]);

  useEffect(() => () => {
    if (map.current) {
      map.current.remove();
      map.current = null;
      isRendered.current = false;
    }
  }, []);

  return map.current;
}

export default useMap;
