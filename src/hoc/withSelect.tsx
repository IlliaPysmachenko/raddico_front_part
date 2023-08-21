import React, { ChangeEvent } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import InputSelectItem, { OptionsArrType } from '@/src/components/inputSelectItem/InputSelectItem';
import { useAppDispatch } from '@/src/redux/hooks';

type WithSelectProps = {
  id: string;
  name: string;
  optionsArr: Array<OptionsArrType>;
  action: ActionCreatorWithPayload<any, any>;
};

const WithSelect: React.FC<WithSelectProps> = ({
  id,
  name,
  optionsArr,
  action,
}) => {
  const dispatch = useAppDispatch();

  const selectValueHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(action(e.target.value));
  };

  return (
    <InputSelectItem
      id={id}
      name={name}
      optionsArr={optionsArr}
      selectValueHandler={selectValueHandler}
    />
  );
};

export default WithSelect;
