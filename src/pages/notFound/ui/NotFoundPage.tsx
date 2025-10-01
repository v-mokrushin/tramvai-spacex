import { animations, imagePaths } from '~shared/constants';
import { getBackgroundImageStyle } from '~shared/utils';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <main className={animations.FADE_IN}>
      <div
        style={getBackgroundImageStyle(imagePaths.NOT_FOUND_PAGE_BACKGROUND)}
        className={styles.background}
      />
      <div className={styles.titleContainer}>
        <span className={styles.title}>PAGE NOT FOUND</span>
      </div>
    </main>
  );
};
