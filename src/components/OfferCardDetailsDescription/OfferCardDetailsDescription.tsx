import {ReactElement} from 'react';

type OfferCardDetailsDescriptionProps = {
  description?: string[];
}

export function OfferCardDetailsDescription({description}:OfferCardDetailsDescriptionProps):ReactElement {
  return (
    <div className="property__description">
      {description?.map((paragraph: string) => (
        <p className="property__text" key={paragraph.slice(0, 50)}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
