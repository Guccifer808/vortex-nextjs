import { useEffect } from 'react';

const useLockBodyScroll = (shouldLock: boolean) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (shouldLock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [shouldLock]);
};

export default useLockBodyScroll;
