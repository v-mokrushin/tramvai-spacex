import styles from '../styles/animations.css';

export const loadingStatuses = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  DONE: 'DONE',
  FAILED: 'FAILED',
} as const;

export const routes = {
  MAIN: '/',
  ROCKETS: '/rockets',
  ROCKET: '/rocket',
  LAUNCHES: '/launches',
} as const;

export const imagePaths = {
  HEADER_LOGO: '/images/logo.png',
  MAIN_PAGE_BACKGROUND: '/images/background.jpg',
} as const;

export const animations = {
  FADE_IN: styles.fadeIn,
} as const;
