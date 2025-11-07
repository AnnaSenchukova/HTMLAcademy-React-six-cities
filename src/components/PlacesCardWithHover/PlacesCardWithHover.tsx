import {ReactElement} from 'react';

import {PlacesCard} from '../PlacesCard';
import type {PlacesCardType} from '../../types/PlacesCardType';
import type {PlacesVariantType} from '../../types/PlacesVariantType';

type PlacesCardWithHoverProps = PlacesCardType & {
  variant: PlacesVariantType;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
};

export function PlacesCardWithHover({
  variant,
  onMouseEnter,
  onMouseLeave,
  ...placeProps
}: PlacesCardWithHoverProps):ReactElement {
  const handleMouseEnter = () => {
    onMouseEnter?.(placeProps.id);
  };

  const handleMouseLeave = () => {
    onMouseLeave?.();
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
