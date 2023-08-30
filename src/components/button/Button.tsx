import React, { FC } from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
  title: string
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'submit' | 'button' | 'reset';
};
const Button: FC<ButtonPropsType> = ({ title, handler , type = 'button' }) => (
  <div className={style.btn_container}>
    {/* eslint-disable-next-line react/button-has-type */}
    <button type={type} className={style.btn} onClick={(event) => { handler(event); }}>{title}</button>
  </div>
);

export default Button;
