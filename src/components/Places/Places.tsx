import {PropsWithChildren, ReactElement} from 'react';
import type {PlacesVariantType} from '../../types/PlacesVariantType';

type PlacesProps = PropsWithChildren <{
  variant: PlacesVariantType;
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
