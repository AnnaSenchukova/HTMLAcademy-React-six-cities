import {ReactElement, useState} from 'react';

import {PlacesCard} from '../PlacesCard';
import type {PlacesCardType} from '../../types/PlacesCardType';

type PlacesCardWithHoverProps = PlacesCardType & {
  variant: 'cities' | 'favorites' | 'near-places';
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
};

export function PlacesCardWithHover({
  variant,
  onMouseEnter,
  onMouseLeave,
  ...placeProps
}: PlacesCardWithHoverProps):ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseEnter = () => {
    setActiveCard(placeProps.id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };
  return (
    <PlacesCard
      {...placeProps}
      variant={variant}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
