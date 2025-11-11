import {ReactElement} from 'react';
import {UserType} from '../../types/UserType';

type ReviewProps = {
  user: UserType;
  rating: number;
  comment: string;
  date: string;
}

export function Review({user, rating, comment, date}: ReviewProps):ReactElement {
  const ratingWidth = `${rating}%`;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`img/${user.avatar}`} width={54} height={54} alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingWidth}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
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
