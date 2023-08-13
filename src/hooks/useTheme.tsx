'use client';

import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<any>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);
  return { theme, setTheme };
};

export default useTheme;
