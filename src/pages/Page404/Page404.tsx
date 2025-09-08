import {ReactElement} from 'react';

import {Logo} from '../../components/Logo';

export function Page404(): ReactElement {
  return (
    <section className="cities__status-wrapper tabs__content">
      <b className="cities__status">Error 404. Not Found...</b>
      <p className="cities__status-description">
        <span>Don&apos;t worry! The&ensp;</span>
        <Logo />
        <span>&ensp;page is always in place.</span>
      </p>
    </section>
  );
}
