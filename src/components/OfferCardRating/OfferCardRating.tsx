import {ReactElement} from 'react';
import {MAX_PERCENT_STARS_WIDTH, STARS_COUNT} from '../../const/constRaiting';

type OfferCardRatingProps = {
  rating: number;
}

export function OfferCardRating({rating}:OfferCardRatingProps):ReactElement {
  const ratingWidth = `${((rating || 0) / STARS_COUNT) * MAX_PERCENT_STARS_WIDTH}%`;
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: ratingWidth}}/>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}
