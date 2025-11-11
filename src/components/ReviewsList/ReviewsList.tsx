import {PropsWithChildren, ReactElement} from 'react';
import {Review} from '../Review';
import {mockUsers} from '../../mocks/mockUsers';

type ReviewType = {
  id: number;
  idPlace: number;
  userId: number;
  rating: number;
  comment: string;
  date: string;
}

type ReviewsListProps = PropsWithChildren <{
  reviews: ReviewType[];
}>

export function ReviewsList({reviews, children}:ReviewsListProps):ReactElement {
  const findUserById = (userId: number) => mockUsers.find((user) => user.idUser === userId);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => {
          const user = findUserById(review.userId);
          return user ? (
            <Review
              key={review.id}
              user={user}
              rating={review.rating}
              comment={review.comment}
              date={review.date}
            />
          ) : null;
        })}
      </ul>
      {children}
    </section>
  );
}
