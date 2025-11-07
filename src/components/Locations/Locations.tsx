import {ReactElement} from 'react';
import {CityType} from '../../types/CitiesType';

type LocationsProps = {
  cities: CityType[];
  activeCity: CityType;
  onCityChange: (city: CityType) => void;
}

export function Locations({cities, activeCity, onCityChange}: LocationsProps): ReactElement {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city.name} className="locations__item">
              <p className={`locations__item-link tabs__item ${city.name === activeCity.name ? 'tabs__item--active' : ''}`} onClick={() => onCityChange(city)}>
                <span>{city.name}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
