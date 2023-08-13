import React, { FC } from 'react';
import style from './Checkbox.module.scss';

export type CheckboxPropsType = {
  id: string;
  name: string;
  isChecked: boolean;
  title: string;
  toggleCheckboxHandler: (id: string, title: string) => void;
};

// eslint-disable-next-line react/function-component-definition
const Checkbox: FC<CheckboxPropsType> = ({
  id,
  name,
  isChecked, toggleCheckboxHandler, title,
}) => (
  <div className={style.checkboxContainer}>
    {/* eslint-disable-next-line react/react-in-jsx-scope */}
    <input
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={() => {
        toggleCheckboxHandler(id, title);
      }}
    />
    <label htmlFor={id} className={style.checkboxLabel}>{name}</label>
  </div>
);

export default Checkbox;
