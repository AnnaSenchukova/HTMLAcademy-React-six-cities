import {ReactElement} from 'react';
import {useParams} from 'react-router-dom';

import {mockPlacesCard} from '../../mocks/mockPlacesCard';
import { mockReviews } from '../../mocks/mockReviews';
import {Page} from '../../components/Page';
import {Places} from '../../components/Places';
import {PlacesCardList} from '../../components/PlacesCardList';
import {ReviewsList} from '../../components/ReviewsList';
import {ReviewForm} from '../../components/ReviewForm';
import {Map} from '../../components/Map';
import {useCardHover} from '../../hooks/useCardHover';
import {OfferCardDetailsGallery} from '../../components/OfferCardDetailsGallery';
import {OfferCardDetailsDescription} from '../../components/OfferCardDetailsDescription';
import {OfferCardDetailsOptionsInside} from '../../components/OfferCardDetailsOptionsInside';
import {OfferCardRating} from '../../components/OfferCardRating';


export function Property(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const propertyReviews = mockReviews.filter((review) => review.idPlace === Number(id));
  const currentOffer = mockPlacesCard.find((offer) => offer.id === Number(id));
  const filteredPlaces = mockPlacesCard.filter((place) => place.city.name === currentOffer?.city.name);
  const { activeCardId, handleCardMouseEnter, handleCardMouseLeave } = useCardHover();

  return (
    <Page mainMod="page__main--property" isFooter={false}>
      <section className="property">
        <div className="property__gallery-container container">
          <OfferCardDetailsGallery gallery={currentOffer?.details.gallery} type={currentOffer?.type} />
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {currentOffer?.isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {currentOffer?.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">
                  {currentOffer?.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                </span>
              </button>
            </div>
            <OfferCardRating rating={currentOffer?.rating || 0} />
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {currentOffer?.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {currentOffer?.details.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {currentOffer?.details.guestCount} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{currentOffer?.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <OfferCardDetailsOptionsInside options={currentOffer?.details.optionsInside} />
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina-2.jpg" width={74} height={74} alt="Host avatar"/>
                </div>
                <span className="property__user-name">Angelina</span>
                <span className="property__user-status">Pro</span>
              </div>
              <OfferCardDetailsDescription description={currentOffer?.details.description}/>
            </div>
            <ReviewsList reviews={propertyReviews}>
              <ReviewForm />
            </ReviewsList>
          </div>
        </div>
        <section className="property__map map"/>
        <Map city={currentOffer?.city ?? mockPlacesCard[0].city} places={filteredPlaces} activeCardId={activeCardId} type='property'/>
      </section>
      <div className="container near-places">
        <Places variant='near-places'>
          <PlacesCardList places={filteredPlaces} city={currentOffer?.city ?? mockPlacesCard[0].city} variant='near-places' onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}/>
        </Places>
      </div>
    </Page>
  );
}
