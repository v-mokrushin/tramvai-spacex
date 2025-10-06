import type { FC } from 'react';
import classNames from 'classnames';
import { animations } from '~shared/constants';
import { Button } from '@mui/material';
import styles from './CenteredErrorMessage.module.css';

type CenteredErrorMessageProps = {
  title: string;
  description?: string;
  isReloadButtonVisible?: boolean;
  onClickReloadButton?: VoidFunction;
};

export const CenteredErrorMessage: FC<CenteredErrorMessageProps> = ({
  title,
  description,
  isReloadButtonVisible = false,
  onClickReloadButton,
}) => {
  const onClickReloadButtonHandler = onClickReloadButton ?? undefined;

  return (
    <div className={classNames(styles.container, animations.FADE_IN)}>
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
      {isReloadButtonVisible && (
        <Button onClick={onClickReloadButtonHandler}>Reload</Button>
      )}
    </div>
  );
};
