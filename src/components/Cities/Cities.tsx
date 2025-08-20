import {ReactElement} from 'react';

import {Places} from '../Places';
import {Map} from '../Map';
import {Locations} from '../Locations';

export function Cities(): ReactElement {
  return(
    <>
      <Locations />
      <section className="cities">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities__places-container container">
          <Places />
          <div className="cities__right-section">
            <Map/>
          </div>
        </div>
      </section>
    </>
  );
}
