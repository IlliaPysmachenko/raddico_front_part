'use client';

import { useLayoutEffect, useState } from 'react';

const useUserColor = () => {
  const [theme, setTheme] = useState<any>(typeof window !== 'undefined'
    ? localStorage.getItem('user-color') : '');
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);
  return { theme, setTheme };
};

export default useUserColor;
