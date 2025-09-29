import {PropsWithChildren, ReactElement} from 'react';

type PlacesProps = PropsWithChildren <{
  variant: 'cities' |'favorites'| 'near-places';
}>

export function Places({ variant, children}: PlacesProps): ReactElement {
  return (
    <section className={`${variant}__places places`}>
      {variant === 'near-places' ? (
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
      ) : (
        <h2 className="visually-hidden">Places</h2>
      )}
      {children}
    </section>
  );
}
