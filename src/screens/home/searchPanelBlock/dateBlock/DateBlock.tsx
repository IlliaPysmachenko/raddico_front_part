import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import Checkbox from '@/src/components/checkbox/Checkbox';
import { getCurrentDate } from '@/src/helpers/functions';
import { setDateFrom, setDatePeriod, setDateTo } from '@/src/redux/searchBlockSlice/searchBlockSlice';
import { filterByPeriod } from '@/src/data/dataExamples';
import WithSelect from '@/src/hoc/withSelect';
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
  const toggleDateSwitcher = () => {
    setDisabledDate(!disabledDate);
  };
  useEffect(() => {
    if (disabledDate) {
      dispatch(setDateFrom(''));
      dispatch(setDateTo(''));
    }
    if (!disabledDate) {
      dispatch(setDateFrom(getCurrentDate()));
      dispatch(setDateTo(getCurrentDate()));
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
          <WithSelect
            id={filterByPeriod.id}
            name={filterByPeriod.name}
            optionsArr={filterByPeriod.optionsArr}
            action={setDatePeriod}
          />
        </div>
      </div>

    </div>
  );
}

export default DateBlock;
