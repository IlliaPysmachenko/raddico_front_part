import React from 'react';
import style from './Button.module.scss';

const Button = ({ title, handler }: any) => (
  <div className={style.btn_container}>
    <button type="submit" className={style.btn} onClick={handler}>{title}</button>
  </div>
);

export default Button;
