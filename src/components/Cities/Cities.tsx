import {ReactElement} from 'react';

import {Places} from '../Places';
import {Map} from '../Map';
import {Locations} from '../Locations';
import {PlacesNotFound} from '../PlacesNotFound';
import {LocationsItemInFocus} from '../LocationsItemInFocus';

type CitiesProps = {
  isEmpty?: boolean;
}

export function Cities({isEmpty}:CitiesProps): ReactElement {
  return (
    <>
      <Locations/>
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
            <Places/>
            <div className="cities__right-section">
              <Map/>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
