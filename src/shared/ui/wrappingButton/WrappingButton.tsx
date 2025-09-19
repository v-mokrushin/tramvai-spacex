import type { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './WrappingButton.module.css';

type WrappingButtonProps = PropsWithChildren<{
  onClick: () => void;
  className?: string;
}>;

export const WrappingButton: FC<WrappingButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.button, className)}
    >
      {children}
    </button>
  );
};
