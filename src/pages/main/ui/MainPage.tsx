import { getBackgroundImageStyle } from '~shared/utils';
import { ANIMATIONS, IMAGE_URLS } from '~shared/constants';
import classNames from 'classnames';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <main className={styles.container}>
      <div
        style={getBackgroundImageStyle(IMAGE_URLS.mainPageBackground)}
        className={classNames(styles.background, ANIMATIONS.fadeIn)}
      />
      <div className={styles.textIntroContainer}>
        <span className={styles.slogan}>Making Humanity Multiplanetary</span>
        <span className={styles.subtitle}>
          Pioneering the future of space exploration and interplanetary life
        </span>
      </div>
    </main>
  );
};
