import { imagePaths, routes } from '~shared/constants';
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
        style={getBackgroundImageStyle(imagePaths.HEADER_LOGO)}
        className={styles.logo}
      />
      <Section label="Home" url={routes.MAIN} />
      <Section label="Rockets" url={routes.ROCKETS} />
      <Section label="Launches" url={routes.LAUNCHES} />
    </header>
  );
};
