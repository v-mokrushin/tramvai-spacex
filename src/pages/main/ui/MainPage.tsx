import { useNavigation } from '~shared/hooks';
import { useDi } from '@tramvai/react';
import { ASSETS_PREFIX_TOKEN } from '@tramvai/tokens-render';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const navigate = useNavigation();

  const assetPrefix = useDi(ASSETS_PREFIX_TOKEN);

  const imageUrl = `${assetPrefix()}/images/background.jpg`;

  const onClickHandler = () => navigate.toRockets();

  //   console.log(imageUrl);

  return (
    <main>
      <span>{imageUrl}</span>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.background}
      />
      <button type="button" onClick={onClickHandler}>
        Rockets
      </button>
    </main>
  );
};
