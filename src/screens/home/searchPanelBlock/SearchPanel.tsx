import React from 'react';

import InputFieldsGroup from '@/src/components/inputFieldsGroup/InputFieldsGroup';
import CheckboxGroup from '@/src/components/checkboxGroup/CheckboxGroup';
import DateBlock from '@/src/screens/home/searchPanelBlock/dateBlock/DateBlock';
import Button from '@/src/components/button/Button';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import {
  setToggleCheckboxInstitutions,
  setToggleCheckboxModality,
} from '@/src/screens/home/searchPanelBlock/slice/searchBlockSlice';
import { CheckboxesType } from '@/src/screens/home/searchPanelBlock/slice/searchBlockTypes';
import { getStudiesThunk } from '@/src/screens/home/studiesBlock/slice/thunkCreators';

import style from './SearchPanel.module.scss';

function SearchPanel() {
  const dispatch = useAppDispatch();
  const {
    modality,
    institutions,
    fields,
    date,
    csrf,
  } = useAppSelector((state) => state.searchBlock);
  // eslint-disable-next-line max-len,@typescript-eslint/naming-convention
  const { key: sort_key, direction: sort_direction } = useAppSelector((state) => state.study.sortConfig);

  const inpFieldValue = (id: string) => {
    const field = fields.find((item) => item.id === id);
    return field ? field.value : '';
  };
  // eslint-disable-next-line max-len
  const useCheckedItems = (items: Array<CheckboxesType>) => items.filter((item) => item.isChecked).map((item) => item.name);

  const checkedModality = useCheckedItems(modality.checkboxArr);
  const checkedFacilities = useCheckedItems(institutions.checkboxArr);

  const SendSearchQuery = () => {
    const createPayload = () => ({
      modalities: checkedModality,
      institutions: checkedFacilities,
      study_date_from: date.dateFrom,
      study_date_to: date.dateTo,
      study_date_period: date.datePeriod,
      patient_id: inpFieldValue('patient_id'),
      patient_name: inpFieldValue('patient_name'),
      patient_dob: inpFieldValue('patient_dob'),
      refferal: inpFieldValue('referral'),
      sort_direction,
      sort_key,
      _token: csrf,
    });
    dispatch(getStudiesThunk(createPayload()));
  };

  const toggleCheckboxHandler = (id: string, title: string) => {
    if (title === 'Modality') dispatch(setToggleCheckboxModality(id));
    if (title === 'Institutions') dispatch(setToggleCheckboxInstitutions(id));
  };

  return (
    <div className={style.searchPanel_container}>

      <div className={style.searchPanel_column}>

        <div className={style.searchPanel_title}>
          <h5>Advanced Search Panel</h5>
        </div>

        <div className={style.searchPanel_row}>
          <InputFieldsGroup title="Searching Fields" fields={fields} />
          <CheckboxGroup
            id={institutions.id}
            isAllChecked={institutions.isAllChecked}
            title="Institutions"
            checkboxArr={institutions.checkboxArr}
            toggleCheckboxHandler={toggleCheckboxHandler}
          />
          <DateBlock />
          <CheckboxGroup
            id={modality.id}
            isAllChecked={modality.isAllChecked}
            title="Modality"
            checkboxArr={modality.checkboxArr}
            toggleCheckboxHandler={toggleCheckboxHandler}
          />

          <Button type="button" title="Search" handler={SendSearchQuery} />

        </div>

      </div>

    </div>
  );
}

export default SearchPanel;
