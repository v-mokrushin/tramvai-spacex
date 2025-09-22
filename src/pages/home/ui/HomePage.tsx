import { getBackgroundImageStyle } from '~shared/utils';
import { animations, imagePaths } from '~shared/constants';
import classNames from 'classnames';
import { homePageLocales } from '~shared/locales';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <main className={styles.container}>
      <div
        style={getBackgroundImageStyle(imagePaths.HOME_PAGE_BACKGROUND)}
        className={classNames(styles.background, animations.FADE_IN)}
      />
      <div className={styles.textIntroContainer}>
        <span className={styles.slogan}>{homePageLocales.SLOGAN}</span>
        <span className={styles.subtitle}>{homePageLocales.SUBTITLE}</span>
      </div>
    </main>
  );
};
