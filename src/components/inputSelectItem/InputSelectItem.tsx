import React, { ChangeEvent } from 'react';
import style from './InputSelectItem.module.scss';

export type OptionsArrType = {
  id?: string;
  name: string;
  // selected: boolean;
};

type SelectItemPropsType = {
  id: string;
  name?: string;
  optionsArr: Array<OptionsArrType> | null;
  selectValueHandler: (e: ChangeEvent<HTMLSelectElement>, id?: string) => void;
};

function InputSelectItem({
  id,
  name,
  optionsArr,
  selectValueHandler,
}: SelectItemPropsType) {
  const showOptions = optionsArr && optionsArr.map((option) => (
    <option
      key={option.id}
      value={option.name}
      // selected={option.selected}
    >
      {option.name}
    </option>
  ));

  const displaySelect = (
    <select
      name={name}
      id={id}
      onChange={(e) => {
        selectValueHandler(e, id);
      }}
    >
      {showOptions}
    </select>
  );

  return (
    <div className={style.selectItem_container}>
      {displaySelect}
    </div>
  );
}

export default InputSelectItem;
