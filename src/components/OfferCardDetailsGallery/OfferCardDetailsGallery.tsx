import {ReactElement} from 'react';

type OfferCardDetailsGalleryProps = {
  gallery?: string[];
  type?: string;
}

export function OfferCardDetailsGallery({gallery = [], type = 'room'}:OfferCardDetailsGalleryProps):ReactElement {

  return(
    <div className="property__gallery">
      {gallery.map((photo: string) => (
        <div className="property__image-wrapper" key={photo}>
          <img className="property__image" src={`img/${photo}`} alt={type}/>
        </div>
      ))}
    </div>
  );
}
