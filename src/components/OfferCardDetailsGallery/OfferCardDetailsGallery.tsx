import {ReactElement} from 'react';

type OfferCardDetailsGalleryProps = {
  currentOffer?: {
    details: {
      gallery: string[];
    };
    type: string;
  };
}

export function OfferCardDetailsGallery({currentOffer}:OfferCardDetailsGalleryProps):ReactElement {
  const gallery: string[] = currentOffer?.details.gallery ?? [];

  return(
    <div className="property__gallery">
      {gallery.map((photo: string) => (
        <div className="property__image-wrapper" key={photo}>
          <img className="property__image" src={`img/${photo}`} alt={currentOffer?.type ?? 'property'}/>
        </div>
      ))}
    </div>
  );
}
