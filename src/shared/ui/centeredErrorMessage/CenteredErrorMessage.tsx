import type { FC } from 'react';
import classNames from 'classnames';
import { animations } from '~shared/constants';
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
    <div className={classNames(styles.container, animations.FADE_IN)}>
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
    </div>
  );
};
