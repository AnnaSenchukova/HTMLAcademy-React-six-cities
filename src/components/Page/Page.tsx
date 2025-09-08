import {PropsWithChildren, ReactElement} from 'react';

import {Header} from '../Header';
import {Footer} from '../Footer';

type PageProps = PropsWithChildren<{
  classMod?: string;
  isFooter?: boolean;
  hasGrayBg?: boolean;
  mainMod?: string;
}>

export function Page({
  classMod = '',
  isFooter = true,
  hasGrayBg = false,
  mainMod = '',
  children
}: PageProps): ReactElement {
  const baseClass = 'page';
  const grayMod = hasGrayBg ? 'page--gray' : '';
  const className = [baseClass, grayMod, classMod]
    .filter(Boolean)
    .join(' ')
    .trim();

  const mainClassName = ['page__main', mainMod]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <div className={className}>
      <Header/>
      <main className={mainClassName}>
        {children}
      </main>
      {isFooter && <Footer/>}
    </div>
  );
}
