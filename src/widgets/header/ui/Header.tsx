import { imagePaths, routes } from '~shared/constants';
import { getBackgroundImageStyle } from '~shared/utils';
import classNames from 'classnames';
import { generalLocales } from '~shared/locales';
import { useNavigation } from '~shared/hooks';
import { WrappingButton } from '~shared/ui';
import styles from './Header.module.css';
import { Section } from './section/Section';
import { useIsBackground } from './useIsBackground';

export const Header = () => {
  const navigate = useNavigation();

  const isBackground = useIsBackground();

  return (
    <header
      className={classNames(
        styles.container,
        isBackground && styles.containerWithBackground
      )}
    >
      <WrappingButton onClick={navigate.toMain}>
        <div
          style={getBackgroundImageStyle(imagePaths.HEADER_LOGO)}
          className={styles.logo}
        />
      </WrappingButton>
      <Section label={generalLocales.HOME} url={routes.MAIN} />
      <Section label={generalLocales.ROCKETS} url={routes.ROCKETS} />
      <Section label={generalLocales.LAUNCHES} url={routes.LAUNCHES} />
    </header>
  );
};
