import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import Checkbox from '@/src/components/checkbox/Checkbox';
import { getCurrentDate } from '@/src/helpers/functions';
import { setDateFrom, setDatePeriod, setDateTo } from '@/src/screens/home/searchPanelBlock/slice/searchBlockSlice';
import { filterByPeriod, filterByPeriodTest } from '@/src/data/dataExamples';
import style from './DateBlock.module.scss';

function DateBlock() {
  const date = useAppSelector((state) => state.searchBlock.date);
  const dispatch = useAppDispatch();
  const [disabledDate, setDisabledDate] = useState(false);

  const setDateBetweenHandler = (e: any) => {
    dispatch(setDateFrom(e.target.value));
  };
  const setDateAndHandler = (e: any) => {
    dispatch(setDateTo(e.target.value));
  };
  const setDatePeriodHandler = (data: { value: string, label: string }) => {
    dispatch(setDatePeriod(data.value));
  };
  const toggleDateSwitcher = () => {
    setDisabledDate(!disabledDate);
  };
  useEffect(() => {
    if (disabledDate) {
      dispatch(setDateFrom(''));
      dispatch(setDateTo(''));
      dispatch(setDatePeriod(''));
    }
    if (!disabledDate) {
      dispatch(setDateFrom(getCurrentDate()));
      dispatch(setDateTo(getCurrentDate()));
      dispatch(setDatePeriod(filterByPeriodTest.optionsArr[0].value));
    }
  }, [disabledDate]);

  return (
    <div className={style.dateFilter_container}>
      <Checkbox
        id="DateOff"
        name="Date filter"
        title="Date"
        isChecked={!disabledDate}
        toggleCheckboxHandler={toggleDateSwitcher}
      />

      <div className={style.dateFilter_block}>
        <div className={style.dateFilter_row}>
          <span>Between:</span>
          <input
            type="date"
            disabled={disabledDate}
            value={date.dateFrom}
            onChange={(e) => {
              setDateBetweenHandler(e);
            }}
          />
        </div>
        <div className={style.dateFilter_row}>
          <span>And:</span>
          <input
            type="date"
            disabled={disabledDate}
            value={date.dateTo}
            onChange={(e) => {
              setDateAndHandler(e);
            }}
          />
        </div>
        <div className={style.dateFilter_row}>
          <span>OR:</span>
          {!disabledDate && (
            <Select
              unstyled
              isSearchable={false}
              classNamePrefix="react-select"
              isDisabled={disabledDate}
              name={filterByPeriod.name}
              options={filterByPeriodTest.optionsArr}
              defaultValue={filterByPeriodTest.optionsArr[0]}
              // @ts-ignore
              onChange={setDatePeriodHandler}
            />
          )}
        </div>
      </div>

    </div>
  );
}

export default DateBlock;
