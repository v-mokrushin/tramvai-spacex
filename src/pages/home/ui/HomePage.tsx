import { getBackgroundImageStyle } from '~shared/utils';
import { animations, imagePaths } from '~shared/constants';
import { homePageLocales } from '~shared/locales';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <main className={animations.FADE_IN}>
      <div
        style={getBackgroundImageStyle(imagePaths.HOME_PAGE_BACKGROUND)}
        className={styles.background}
      />
      <div className={styles.textIntroContainer}>
        <span className={styles.slogan}>{homePageLocales.SLOGAN}</span>
        <span className={styles.subtitle}>{homePageLocales.SUBTITLE}</span>
      </div>
    </main>
  );
};
