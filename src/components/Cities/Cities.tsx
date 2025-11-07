import {ReactElement, useState} from 'react';

import {Places} from '../Places';
import {Map} from '../Map';
import {Locations} from '../Locations';
import {PlacesNotFound} from '../PlacesNotFound';
import {LocationsItemInFocus} from '../LocationsItemInFocus';
import {PlacesSorting} from '../PlacesSorting';
import {PlacesCardsFilter} from '../PlacesCardsFilter';
import {mockPlacesCard} from '../../mocks/mockPlacesCard';
import { mockCities } from '../../mocks/mockCities';

type CitiesProps = {
  isEmpty?: boolean;
}

export function Cities({isEmpty}:CitiesProps): ReactElement {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardMouseEnter = (id: number) => {
    setActiveCardId(id);
  };

  const handleCardMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <>
      <Locations cities={Object.values(mockCities)} activeCity={mockCities.Amsterdam}/>
      <section className="cities">
        <h1 className="visually-hidden">Cities</h1>
        {isEmpty ? (
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
              <PlacesCardsFilter places={mockPlacesCard} city={mockCities.Amsterdam} variant='cities' showPlacesFound onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}/>
            </Places>
            <div className="cities__right-section">
              <Map city={mockCities.Amsterdam} places={mockPlacesCard} activeCardId={activeCardId}/>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
