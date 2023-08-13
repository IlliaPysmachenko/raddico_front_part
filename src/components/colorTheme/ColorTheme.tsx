'use client';

import React, { useRef } from 'react';
import { Sun, Moon } from '@/src/assets/icons';
import useTheme from '@/src/hooks/useTheme';
import style from './ColorTheme.module.scss';

function ColorTheme() {
  const ref = useRef<HTMLInputElement>(null);
  const { theme, setTheme } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const toggleThemeHandler = (ref: any) => {
    if (ref.current.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <div className={style.colorThemeToggle_container}>
      <input
        ref={ref}
        onClick={() => {
          toggleThemeHandler(ref);
        }}
        defaultChecked={theme === 'dark'}
        type="checkbox"
        id="darkmode-toggle"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="darkmode-toggle">
        <Sun className={style.sun} />
        <Moon className={style.moon} />
      </label>
    </div>
  );
}

export default ColorTheme;
