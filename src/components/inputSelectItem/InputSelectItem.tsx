import React, { ChangeEvent } from 'react';
import style from './InputSelectItem.module.scss';

export type OptionsArrType = {
  value: string;
  title: string;
  selected: boolean;
};

type SelectItemPropsType = {
  id: string;
  name: string;
  optionsArr: Array<OptionsArrType>;
  selectValueHandler: (e: ChangeEvent<HTMLSelectElement>, id?: string) => void;
};

function InputSelectItem({
  id,
  name,
  optionsArr,
  selectValueHandler,
}: SelectItemPropsType) {
  return (
    <div className={style.selectItem_container}>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <select
        name={name}
        id={id}
        onChange={(e) => {
          selectValueHandler(e, id);
        }}
      >
        {optionsArr.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={option.selected}
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelectItem;
