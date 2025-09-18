import { IMAGE_URLS, ROUTES } from '~shared/constants';
import { getBackgroundImageStyle } from '~shared/utils';
import classNames from 'classnames';
import styles from './Header.module.css';
import { Section } from './section/Section';
import { useIsBackground } from './useIsBackground';

export const Header = () => {
  const isBackground = useIsBackground();

  return (
    <header
      className={classNames(
        styles.container,
        isBackground && styles.container_withBackground
      )}
    >
      <div
        style={getBackgroundImageStyle(IMAGE_URLS.headerLogo)}
        className={styles.logo}
      />
      <Section label="Home" url={ROUTES.main} />
      <Section label="Rockets" url={ROUTES.rockets} />
      <Section label="Launches" url={ROUTES.launches} />
      <Section label="Landpads" url="" />
    </header>
  );
};
