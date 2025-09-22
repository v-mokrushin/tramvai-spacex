import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const Portal: FC<PropsWithChildren> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return createPortal(children, document.body);
};
