import {ReactElement} from 'react';

import {Page} from '../../components/Page';
import {PlacesCard} from '../../components/PlacesCard';

import type {PlacesCardType} from '../../types/PlacesCardType';

type FavoritesProps = {
  places: PlacesCardType[];
}

export function Favorites({places}: FavoritesProps): ReactElement {
  const groupedOffersByCity = places.reduce<{ [key: string ]: PlacesCardType[] }>((acc, curr) => {
    if (curr.isAddToBookmark) {
      const city = curr.city.name;

      if (!(city in acc)) {
        acc[city] = [];
      }

      acc[city].push(curr);
    }

    return acc;
  }, {});

  return (
    <Page mainMod="page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(groupedOffersByCity).map(([city, groupedOffers]) => (
              <li key={city} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {groupedOffers.map((place) => (
                    <PlacesCard
                      key={place.id}
                      {...place}
                      place="favorites"
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Page>
  );
}
