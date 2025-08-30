import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';

export function Page404(): ReactElement {
  return (
    <section className="cities__status-wrapper tabs__content">
      <b className="cities__status">Error 404. Not Found...</b>
      <p className="cities__status-description">
        <span>Don&apos;t worry! The&ensp;</span>
        <NavLink to='/'><b>Main</b></NavLink>
        <span>&ensp;page is always in place.</span>
      </p>
    </section>
  );
}
