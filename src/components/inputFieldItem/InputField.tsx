import React, { ChangeEvent } from 'react';
import style from './InputField.module.scss';

export type InputFieldPropsType = {
  id: string;
  title: string;
  value: string;
  inputChangeHandler: (id:string, event:ChangeEvent<HTMLInputElement>) => void
};
function InputField({
  id, title, value, inputChangeHandler,
}:InputFieldPropsType) {
  return (
    <div className={style.inputField_container}>
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(event) => {
          inputChangeHandler(id, event);
        }}
      />
    </div>
  );
}

export default InputField;
