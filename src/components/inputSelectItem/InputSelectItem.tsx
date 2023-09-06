import React, { ChangeEvent } from 'react';
import style from './InputSelectItem.module.scss';

export type OptionsArrType = {
  id?: string;
  name: string;
};

type SelectItemPropsType = {
  id: string;
  // eslint-disable-next-line react/require-default-props
  name?: string;
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  disabled?: boolean;
  optionsArr: Array<OptionsArrType> | null;
  selectValueHandler: (e: ChangeEvent<HTMLSelectElement>, id?: string) => void;
};

function InputSelectItem({
  id,
  name,
  disabled,
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

  // Обработка момента монтирования компонента
  // useEffect(() => {
  //   // Здесь можно установить начальное значение вашего <select>, если необходимо
  //   // Например, выбрать первый элемент из optionsArr
  //   if (optionsArr && optionsArr.length > 0) {
  //     // @ts-ignore
  //     selectValueHandler({ target: { value: optionsArr[0].name } }, id);
  //   }
  // }, [optionsArr, id, selectValueHandler]);

  const displaySelect = (
    <select
      disabled={disabled}
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
