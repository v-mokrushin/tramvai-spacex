import type { FC } from 'react';
import styles from './CenteredErrorMessage.module.css';

type CenteredErrorMessageProps = {
  title: string;
  description?: string;
};

export const CenteredErrorMessage: FC<CenteredErrorMessageProps> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
    </div>
  );
};
