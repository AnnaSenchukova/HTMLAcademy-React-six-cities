import {ReactElement} from 'react';

import {Places} from '../Places';
import {Map} from '../Map';
import {PlacesNotFound} from '../PlacesNotFound';
import {LocationsItemInFocus} from '../LocationsItemInFocus';
import {PlacesSorting} from '../PlacesSorting';
import {PlacesCardList} from '../PlacesCardsFilter';
import {CityType} from '../../types/CitiesType';
import {PlacesCardType} from '../../types/PlacesCardType';

type CitiesProps = {
  isEmpty?: boolean;
  city: CityType;
  places?: PlacesCardType[];
  activeCardId?: number | null;
  onCardMouseEnter?: (id: number) => void;
  onCardMouseLeave?: () => void;
}

export function Cities(props: CitiesProps): ReactElement {
  const {
    isEmpty,
    city,
    places,
    activeCardId,
    onCardMouseEnter,
    onCardMouseLeave
  } = props;

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
            <PlacesCardList
              places={places}
              city={city}
              variant='cities'
              showPlacesFound
              onMouseEnter={onCardMouseEnter}
              onMouseLeave={onCardMouseLeave}
            />
          </Places>
          <div className="cities__right-section">
            <Map city={city} places={places} activeCardId={activeCardId}/>
          </div>
        </div>
      )}
    </section>
  );
}
