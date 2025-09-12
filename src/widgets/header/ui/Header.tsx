import { IMAGE_URLS, ROUTES } from '~shared/constants';
import { getBackgroundImageStyle } from '~shared/utils';
import styles from './Header.module.css';
import { Section } from './section/Section';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div style={getBackgroundImageStyle(IMAGE_URLS.headerLogo)} />
      <Section label="Rockets" url={ROUTES.rockets} />
      <Section label="Launches" url="" />
      <Section label="Landpads" url="" />
    </header>
  );
};
