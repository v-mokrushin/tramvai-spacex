import { getBackgroundImageStyle } from '~shared/utils';
import { animations, imagePaths } from '~shared/constants';
import classNames from 'classnames';
import { mainPageLocales } from '~shared/locales';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <main className={styles.container}>
      <div
        style={getBackgroundImageStyle(imagePaths.MAIN_PAGE_BACKGROUND)}
        className={classNames(styles.background, animations.FADE_IN)}
      />
      <div className={styles.textIntroContainer}>
        <span className={styles.slogan}>{mainPageLocales.SLOGAN}</span>
        <span className={styles.subtitle}>{mainPageLocales.SUBTITLE}</span>
      </div>
    </main>
  );
};
