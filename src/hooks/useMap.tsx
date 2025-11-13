import {useEffect, useRef, RefObject, useState} from 'react';
import leaflet from 'leaflet';

import type { LocationType } from '../types/LocationType';
import {MAP_LAYER_ATTRIBUTION, MAP_LAYER_URL} from '../const/constMap';


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
          MAP_LAYER_URL,
          {
            attribution: MAP_LAYER_ATTRIBUTION,
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

