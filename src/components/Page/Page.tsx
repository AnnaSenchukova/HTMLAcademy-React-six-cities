import {PropsWithChildren, ReactElement} from 'react';

import {Header} from '../Header';
import {Footer} from '../Footer';

type PageProps = PropsWithChildren<{
  classMod?: string;
  isFooter?: boolean;
  hasGrayBg?: boolean;
}>


export function Page({
  classMod = '',
  isFooter = true,
  hasGrayBg = false,
  children
}: PageProps): ReactElement {
  const baseClass = 'page';
  const grayMod = hasGrayBg ? 'page--gray' : '';
  const className = [baseClass, grayMod, classMod]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <div className={className}>
      <Header/>
      {children}
      {isFooter && <Footer/>}
    </div>
  );
}
