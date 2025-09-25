import type { FC } from 'react';
import classNames from 'classnames';
import { WrappingButton } from '../../../wrappingButton';
import styles from './ArrowButton.module.css';

type ArrowButtonProps = {
  onClick: VoidFunction;
  direction?: 'left' | 'right';
};

export const ArrowButton: FC<ArrowButtonProps> = ({ onClick, direction }) => {
  const isLeft = direction === 'left';

  return (
    <WrappingButton onClick={onClick}>
      <svg
        width={28}
        height={42}
        viewBox="0 0 28 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(isLeft ? styles.left : styles.right)}
      >
        <path
          d="M21 3L7 21L21 39"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </WrappingButton>
  );
};
