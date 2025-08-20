import {PropsWithChildren, ReactElement} from 'react';

import {Header} from '../Header';
import {Footer} from '../Footer';

type PageProps = PropsWithChildren<{
  classMod?: string;
  isFooter: boolean;
}>


export function Page({classMod, isFooter, children}: PageProps): ReactElement {
  return (
    <div className={`page page--gray ${classMod || ''}`.trim()}>
      <Header/>
      {children}
      {isFooter && <Footer/>}
    </div>
  );
}
