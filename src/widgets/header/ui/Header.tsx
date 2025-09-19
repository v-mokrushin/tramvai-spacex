import { imagePaths, routes } from '~shared/constants';
import { getBackgroundImageStyle } from '~shared/utils';
import classNames from 'classnames';
import { generalLocales } from '~shared/locales';
import styles from './Header.module.css';
import { Section } from './section/Section';
import { useIsBackground } from './useIsBackground';

export const Header = () => {
  const isBackground = useIsBackground();

  return (
    <header
      className={classNames(
        styles.container,
        isBackground && styles.containerWithBackground
      )}
    >
      <div
        style={getBackgroundImageStyle(imagePaths.HEADER_LOGO)}
        className={styles.logo}
      />
      <Section label={generalLocales.HOME} url={routes.MAIN} />
      <Section label={generalLocales.ROCKETS} url={routes.ROCKETS} />
      <Section label={generalLocales.LAUNCHES} url={routes.LAUNCHES} />
    </header>
  );
};
