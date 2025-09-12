import { useRoute } from '@tramvai/module-router';
import styles from './Header.module.css';

export const Header = () => {
  const { path } = useRoute();

  return <header className={styles.container}>{path}</header>;
};
