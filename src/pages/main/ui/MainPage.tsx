import { useNavigation } from '~shared/hooks';
import { getBackgroundImageStyle } from '~shared/utils';
import { IMAGE_URLS } from '~shared/constants';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const navigate = useNavigation();

  const onClickHandler = () => navigate.toRockets();

  return (
    <main>
      <div
        style={getBackgroundImageStyle(IMAGE_URLS.mainPageBackground)}
        className={styles.background}
      />
      <button type="button" onClick={onClickHandler}>
        Rockets
      </button>
    </main>
  );
};
