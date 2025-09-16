import { getBackgroundImageStyle } from '~shared/utils';
import { ANIMATIONS, IMAGE_URLS } from '~shared/constants';
import classNames from 'classnames';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <main>
      <div
        style={getBackgroundImageStyle(IMAGE_URLS.mainPageBackground)}
        className={classNames(styles.background, ANIMATIONS.fadeIn)}
      />
    </main>
  );
};
