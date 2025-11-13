import {ReactElement} from 'react';
import {UserType} from '../../types/UserType';
import {OfferCardRating} from '../OfferCardRating';
import {User} from '../User';

type ReviewProps = {
  user: UserType;
  rating: number;
  comment: string;
  date: string;
}

export function Review({user, rating, comment, date}: ReviewProps):ReactElement {
  return (
    <li className="reviews__item">
      <User user={user}/>
      <div className="reviews__info">
        <OfferCardRating rating={rating} />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </time>
      </div>
    </li>
  );
}
