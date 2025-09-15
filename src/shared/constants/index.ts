export const LOADING_STATUSES = {
  idle: 'idle',
  pending: 'pending',
  done: 'done',
  failed: 'failed',
} as const;

export const ROUTES = {
  main: '/',
  rockets: '/rockets',
};

export const IMAGE_URLS = {
  headerLogo: '/images/logo.png',
  mainPageBackground: '/images/background.jpg',
} as const;
