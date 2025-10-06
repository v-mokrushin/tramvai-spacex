import styles from '../styles/animations.css';

export const loadingStatuses = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  DONE: 'DONE',
  FAILED: 'FAILED',
} as const;

export const routes = {
  HOME: '/',
  ROCKETS: '/rockets',
  ROCKET: '/rocket',
  LAUNCHES: '/launches',
} as const;

export const imagePaths = {
  HEADER_LOGO: '/images/logo.png',
  HOME_PAGE_BACKGROUND: '/images/background.jpg',
  NOT_FOUND_PAGE_BACKGROUND: '/images/not-found.jpg',
} as const;

export const animations = {
  FADE_IN: styles.fadeIn,
} as const;

export const NOT_FOUND_PAGE_NAME = 'notFound';
