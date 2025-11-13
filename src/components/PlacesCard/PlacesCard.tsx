import {ReactElement} from 'react';
import { AppRoute } from '../../const/enumAppRoute';

import type {PlacesCardType} from '../../types/PlacesCardType';
import type {PlacesVariantType} from '../../types/PlacesVariantType';
import {OfferCardRating} from '../OfferCardRating';

type PlacesCardProps = PlacesCardType & {
  variant: PlacesVariantType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function PlacesCard({variant, onMouseEnter, onMouseLeave, ...props}: PlacesCardProps): ReactElement {
  return (
    <article
      className={`${variant}__card place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${variant}__image-wrapper place-card__image-wrapper`}>
        <a href="/">
          <img className="place-card__image" src={props.imageSrc} width="260" height="200" alt="Place card"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${props.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {props.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <OfferCardRating rating={props.rating} />
        <h2 className="place-card__name">
          <a href={`${AppRoute.OfferDetails}/${props.id}`}>{props.title}</a>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}
