import {ReactElement} from 'react';

import {Page} from '../../components/Page';
import {Cities} from '../../components/Cities';


export function MainEmpty(): ReactElement {
  return (
    <Page isFooter={false} classMod={'page--main'}>
      <main className="page__main page__main--index page__main--index-empty">
        <Cities isEmpty/>
      </main>
    </Page>
  );
}
