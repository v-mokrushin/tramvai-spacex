import { getBackgroundImageStyle } from '~shared/utils';
import { animations, imagePaths } from '~shared/constants';
import classNames from 'classnames';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <main className={styles.container}>
      <div
        style={getBackgroundImageStyle(imagePaths.MAIN_PAGE_BACKGROUND)}
        className={classNames(styles.background, animations.FADE_IN)}
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
