import { useRoute } from '@tramvai/module-router';
import { useEffect } from 'react';
import { ROUTES } from '~shared/constants';

export const useIsBackground = () => {
  const { path } = useRoute();

  //   if (typeof window !== 'undefined') {
  //     console.log('path', path);
  //   }

  console.log(`path isServer=${typeof window === 'undefined'}`, path);

  //   localStorage.setItem(
  //     `path $isServer=${typeof window !== 'undefined'} ${Math.random()}`,
  //     path
  //   );

  return path !== ROUTES.main;
};
