import {ReactElement} from 'react';

type OfferCardDetailsOptionsInsideProps = {
  options?: string[];
}

export function OfferCardDetailsOptionsInside({options}:OfferCardDetailsOptionsInsideProps):ReactElement {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">{'What\'s inside'}</h2>
      <ul className="property__inside-list">
        {options?.map((option: string) => (
          <li className="property__inside-item" key={option}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
