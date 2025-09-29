import {ReactElement} from 'react';
import { AppRoute } from '../../const/enumAppRoute';
import {MAX_PERCENT_STARS_WIDTH, STARS_COUNT} from '../../const/constRaiting';

import type {PlacesCardType} from '../../types/PlacesCardType';

type PlacesCardProps = PlacesCardType & {
  variant: 'cities' | 'favorites' | 'near-places';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function PlacesCard({variant, onMouseEnter, onMouseLeave, ...props}: PlacesCardProps): ReactElement {
  const ratingWidth = `${(props.rating / STARS_COUNT) * MAX_PERCENT_STARS_WIDTH}%`;
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
            className={`place-card__bookmark-button button ${props.isAddToBookmark ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {props.isAddToBookmark ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`${AppRoute.Property}/${props.id}`}>{props.description}</a>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}
