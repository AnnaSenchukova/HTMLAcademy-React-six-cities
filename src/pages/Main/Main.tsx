import {ReactElement} from 'react';

import {Page} from '../../components/Page';
import {Cities} from '../../components/Cities';


export function Main(): ReactElement {
  return (
    <Page classMod="page--main" mainMod="page__main--index" isFooter={false}>
      <Cities />
    </Page>
  );
}
