import { imagePaths } from '~shared/constants';
import { getBackgroundImageStyle } from '~shared/utils';
import classNames from 'classnames';
import { useNavigation } from '~shared/hooks';
import { WrappingButton } from '~shared/ui';
import { Link } from '@tramvai/module-router';
import styles from './Header.module.css';
import { useIsBackground } from './useIsBackground';
import { pages } from './config';

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
      {pages.map(({ url, label }) => (
        <Link key={url} url={url}>
          <span className={styles.label}>{label}</span>
        </Link>
      ))}
    </header>
  );
};
