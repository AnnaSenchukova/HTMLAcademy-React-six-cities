import {useEffect, useRef, RefObject, useState} from 'react';
import leaflet from 'leaflet';
import type { LocationType } from '../types/LocationType';

function useMap(mapRef: RefObject<HTMLElement | null>, city: LocationType) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
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

      setMap(instance);
      isRendered.current = true;
    } else if (map && city) {
      map.setView([city.latitude, city.longitude], city.zoom);
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;

