import type { FC } from 'react';
import { WrappingButton } from '../../../wrappingButton';
import styles from './CloseButton.module.css';

type CloseButtonProps = {
  onClick: VoidFunction;
};

export const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <WrappingButton onClick={onClick} className={styles.container}>
      <svg
        width={42}
        height={42}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.5 10.5L10.5 31.5M10.5 10.5L31.5 31.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </WrappingButton>
  );
};
