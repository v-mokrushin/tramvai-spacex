import { getBackgroundImageStyle } from '~shared/utils';
import { IMAGE_URLS } from '~shared/constants';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <main>
      <div
        style={getBackgroundImageStyle(IMAGE_URLS.mainPageBackground)}
        className={styles.background}
      />
    </main>
  );
};
