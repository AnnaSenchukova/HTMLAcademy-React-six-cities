import {ReactElement} from 'react';

import {Page} from '../../components/Page';
import {Cities} from '../../components/Cities';
import {mockCities} from '../../mocks/mockCities';


export function MainEmpty(): ReactElement {
  return (
    <Page isFooter={false} classMod={'page--main'} mainMod="page__main--index page__main--index-empty">
      <Cities city={mockCities.Amsterdam} isEmpty/>
    </Page>
  );
}
