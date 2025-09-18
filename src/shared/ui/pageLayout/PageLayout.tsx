import type { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './PageLayout.module.css';

type PageLayoutProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export const PageLayout: FC<PageLayoutProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.contentContainer}>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};
