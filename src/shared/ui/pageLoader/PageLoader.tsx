import styles from './PageLoader.module.css';

export const PageLoader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader} />
    </div>
  );
};
