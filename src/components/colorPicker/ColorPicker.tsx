import React, { useState } from 'react';
import Button from '@/src/components/button/Button';
import style from './ColorPicker.module.scss';

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(''); // Начальное значение цвета

  const handleColorChange = (color:any) => {
    setSelectedColor(color);
    document.documentElement.style.setProperty('--user-background', color);
  };
  const resetColorButtonHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.documentElement.style.removeProperty('--user-background');
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="userColor">Color Scheme: </label>
      <input
        id="userColor"
        type="color"
        value={selectedColor}
        onChange={(e) => handleColorChange(e.target.value)}
      />
      <div className={style.resetBtn}>
        <Button type="button" title="Reset to default" handler={resetColorButtonHandle} />
      </div>
      {/* Другие элементы интерфейса */}
    </div>
  );
}
