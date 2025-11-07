import {ReactElement, useState} from 'react';

import {Page} from '../../components/Page';
import {Cities} from '../../components/Cities';
import {mockCities} from '../../mocks/mockCities';
import {mockPlacesCard} from '../../mocks/mockPlacesCard';
import {Locations} from '../../components/Locations';
import {CityType} from '../../types/CitiesType';
import {useFilteredPlaces} from '../../hooks/useFilteredPlaces';


export function Main(): ReactElement {
  const [activeCity, setActiveCity] = useState<CityType>(mockCities.Amsterdam);
  const filteredPlaces = useFilteredPlaces(mockPlacesCard, activeCity);

  const handleCityChange = (city: CityType) => {
    setActiveCity(city);
  };

  return (
    <Page classMod="page--main" mainMod="page__main--index" isFooter={false}>
      <Locations cities={Object.values(mockCities)} activeCity={activeCity} onCityChange={handleCityChange}/>
      <Cities city={activeCity} places={filteredPlaces} />
    </Page>
  );
}
