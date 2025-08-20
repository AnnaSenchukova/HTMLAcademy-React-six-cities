import {ReactElement} from 'react';

import {Page} from '../../components/Page';
import {Cities} from '../../components/Cities';


export function Main(): ReactElement {
  return (
    <Page classMod="page--main" isFooter={false}>
      <main className="page__main page__main--index">
        <Cities />
      </main>
    </Page>
  );
}
