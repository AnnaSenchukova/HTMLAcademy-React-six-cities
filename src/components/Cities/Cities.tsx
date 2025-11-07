import {ReactElement, useState} from 'react';

import {Places} from '../Places';
import {Map} from '../Map';
import {PlacesNotFound} from '../PlacesNotFound';
import {LocationsItemInFocus} from '../LocationsItemInFocus';
import {PlacesSorting} from '../PlacesSorting';
import {PlacesCardsFilter} from '../PlacesCardsFilter';
import {CityType} from '../../types/CitiesType';
import {PlacesCardType} from '../../types/PlacesCardType';

type CitiesProps = {
  isEmpty?: boolean;
  city: CityType;
  places?: PlacesCardType[];
}

export function Cities({isEmpty, city, places}:CitiesProps): ReactElement {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardMouseEnter = (id: number) => {
    setActiveCardId(id);
  };

  const handleCardMouseLeave = () => {
    setActiveCardId(null);
  };

  const shouldShowEmptyState = isEmpty || !places || places.length === 0;

  return (
    <section className="cities">
      <h1 className="visually-hidden">Cities</h1>
      {shouldShowEmptyState ? (
        <div className="cities__places-container cities__places-container--empty container">
          <PlacesNotFound/>
          <div className="cities__right-section">
            <LocationsItemInFocus/>
          </div>
        </div>
      ) : (
        <div className="cities__places-container container">
          <Places variant='cities'>
            <PlacesSorting />
            <PlacesCardsFilter places={places} city={city} variant='cities' showPlacesFound onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}/>
          </Places>
          <div className="cities__right-section">
            <Map city={city} places={places} activeCardId={activeCardId}/>
          </div>
        </div>
      )}
    </section>
  );
}
