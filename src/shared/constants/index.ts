import styles from '../styles/animations.css';

export const LOADING_STATUSES = {
  idle: 'idle',
  pending: 'pending',
  done: 'done',
  failed: 'failed',
} as const;

export const ROUTES = {
  main: '/',
  rockets: '/rockets',
  rocket: '/rocket',
};

export const IMAGE_URLS = {
  headerLogo: '/images/logo.png',
  mainPageBackground: '/images/background.jpg',
} as const;

export const ANIMATIONS = {
  fadeIn: styles.fadeIn,
};
