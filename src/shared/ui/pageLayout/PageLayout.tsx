import type { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { animations } from '~shared/constants';
import styles from './PageLayout.module.css';

type PageLayoutProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export const PageLayout: FC<PageLayoutProps> = ({
  title,
  children,
  className,
}) => (
  <div className={classNames(styles.container, animations.FADE_IN, className)}>
    <div className={styles.contentContainer}>
      <h1>{title}</h1>
      {children}
    </div>
  </div>
);
