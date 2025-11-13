import {ReactElement} from 'react';

import {Page} from '../../components/Page';

import type {PlacesCardType} from '../../types/PlacesCardType';
import {Places} from '../../components/Places';
import {PlacesCardList} from '../../components/PlacesCardList';

type FavoritesProps = {
  places: PlacesCardType[];
}

export function Favorites({places}: FavoritesProps): ReactElement {
  const groupedOffersByCity = places.reduce<{ [key: string ]: { city: PlacesCardType['city']; offers: PlacesCardType[] } }>((acc, curr) => {
    if (curr.isFavorite) {
      const cityName = curr.city.name;

      if (!(cityName in acc)) {
        acc[cityName] = { city: curr.city, offers: [] };
      }

      acc[cityName].offers.push(curr);
    }

    return acc;
  }, {});

  return (
    <Page mainMod="page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(groupedOffersByCity).map(([cityName, { city, offers }]) => (
              <li key={cityName} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>{cityName}</span>
                    </a>
                  </div>
                </div>
                <Places variant='favorites'>
                  <PlacesCardList places={offers} variant='favorites' city={city} />
                </Places>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Page>
  );
}
