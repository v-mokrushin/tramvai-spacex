import type { FC, PropsWithChildren } from 'react';
import styles from './PageLayout.module.css';

type PageLayoutProps = PropsWithChildren<{
  title: string;
}>;

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};
