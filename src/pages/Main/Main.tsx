import {ReactElement, useState} from 'react';

import {Page} from '../../components/Page';
import {Cities} from '../../components/Cities';
import {mockCities} from '../../mocks/mockCities';
import {mockPlacesCard} from '../../mocks/mockPlacesCard';
import {Locations} from '../../components/Locations';
import {CityType} from '../../types/CitiesType';
import {useCardHover} from '../../hooks/useCardHover';


export function Main(): ReactElement {
  const [activeCity, setActiveCity] = useState<CityType>(mockCities.Amsterdam);
  const { activeCardId, handleCardMouseEnter, handleCardMouseLeave } = useCardHover();
  const filteredPlaces = mockPlacesCard.filter((place) => place.city.name === activeCity.name);

  const handleCityChange = (city: CityType) => {
    setActiveCity(city);
  };

  return (
    <Page classMod="page--main" mainMod="page__main--index" isFooter={false}>
      <Locations cities={Object.values(mockCities)} activeCity={activeCity} onCityChange={handleCityChange}/>
      <Cities city={activeCity} places={filteredPlaces} activeCardId={activeCardId} onCardMouseEnter={handleCardMouseEnter} onCardMouseLeave={handleCardMouseLeave}/>
    </Page>
  );
}
