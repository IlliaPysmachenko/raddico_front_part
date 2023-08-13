import React, { ChangeEvent } from 'react';
import style from './InputSelectItem.module.scss';

type OptionsArrType = {
  value: string;
  title: string;
  checked: boolean;
};

type SelectItemType = {
  id: string;
  name: string;
  optionsArr: Array<OptionsArrType>;
  selectValueHandler: (id: string, e: ChangeEvent<HTMLSelectElement>) => void;
};

function InputSelectItem({
  id,
  name,
  optionsArr,
  selectValueHandler,
}: SelectItemType) {
  return (
    <div className={style.selectItem_container}>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <select
        name={name}
        id={id}
        onChange={(e) => {
          selectValueHandler(id, e);
        }}
      >
        {optionsArr.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={option.checked}
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelectItem;
