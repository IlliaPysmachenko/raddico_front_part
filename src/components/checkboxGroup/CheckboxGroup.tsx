import React from 'react';
import Checkbox from '@/src/components/checkbox/Checkbox';
import { CheckboxesType } from '@/src/redux/searchBlockSlice/searchBlockTypes';
import { useAppDispatch } from '@/src/redux/hooks';
import { setToggleAllCheckbox } from '@/src/redux/searchBlockSlice/searchBlockSlice';
import style from './CheckboxGroup.module.scss';

type CheckboxGroupPropsType = {
  id: string;
  title: string;
  isAllChecked: boolean;
  checkboxArr: Array<CheckboxesType>;
  toggleCheckboxHandler: (id: string, title: string) => void;
};

function CheckboxGroup({
  id, title, checkboxArr, isAllChecked, toggleCheckboxHandler,
}:CheckboxGroupPropsType) {
  const dispatch = useAppDispatch();

  const toggleAllCheckboxHandler = () => {
    // debugger
    dispatch(setToggleAllCheckbox(id));
  };

  return (
    <div className={style.checkboxGroup_container}>
      <Checkbox
        id={id}
        name={title}
        isChecked={isAllChecked}
        title={title}
        toggleCheckboxHandler={toggleAllCheckboxHandler}
      />
      <div className={style.checkboxes_block}>
        {checkboxArr.map((item) => (
          <Checkbox
            key={item.id}
            id={item.id}
            name={item.name}
            isChecked={item.isChecked}
            title={title}
            toggleCheckboxHandler={toggleCheckboxHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckboxGroup;
