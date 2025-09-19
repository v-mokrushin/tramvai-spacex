import type { FC } from 'react';
import { useNavigate } from '@tramvai/module-router';

import { WrappingButton } from '~shared/ui';
import styles from './Section.module.css';

type SectionProps = {
  label: string;
  url: string;
};

export const Section: FC<SectionProps> = ({ label, url }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(url);

  return (
    <WrappingButton onClick={onNavigateHandler}>
      <span className={styles.label}>{label}</span>
    </WrappingButton>
  );

  return (
    <button type="button" onClick={onNavigateHandler} className={styles.button}>
      <span className={styles.label}>{label}</span>
    </button>
  );
};
