import style from './DateBlock.module.scss'

import {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/src/redux/hooks";
// import {getDateAnd, getDateBetween} from "@/src/redux/dateSlice/dateSlice";
import Checkbox from "@/src/components/checkbox/Checkbox";
import {getCurrentDate} from "@/src/helpers/functions";
import {setDateFrom, setDatePeriod, setDateTo} from "@/src/redux/searchBlockSlice/searchBlockSlice";
import InputSelectItem from "@/src/components/inputSelectItem/InputSelectItem";
import {filterByPeriod} from "@/src/data/dataExamples";

const DateBlock = () => {
    const date = useAppSelector((state) =>  state.searchBlock.date );
    const dispatch = useAppDispatch();
    const [disabledDate, setDisabledDate] = useState(false)


    const setDatePeriodValueHandler = (id:string, e:ChangeEvent<HTMLSelectElement>) => {
        dispatch(setDatePeriod(e.target.value))
    }

    const setDateBetweenHandler = (e:any) => {
        dispatch(setDateFrom(e.target.value))
    }
    const setDateAndHandler = (e:any) => {
        dispatch(setDateTo(e.target.value))
    }
    const toggleDateSwitcher = () => {
        setDisabledDate(!disabledDate);
    }
    useEffect(() => {
        if(disabledDate){
            dispatch(setDateFrom(''));
            dispatch(setDateTo(''));
        }
        if(!disabledDate) {
            dispatch(setDateFrom(getCurrentDate()));
            dispatch(setDateTo(getCurrentDate()));
        }

    }, [disabledDate])


    //TODO: -Add date block with ‘yesterday’, ‘this week’, ‘last week’, ‘this month’, ‘last month’

    return(
        <div className={style.dateFilter_container}>
            <h5>Date filter</h5>
            <Checkbox id={`DateOff`} name={''} title={'Date'} isChecked={!disabledDate} toggleCheckboxHandler={toggleDateSwitcher}/>

            <div className={style.dateFilter_block}>
                {/*<div className={style.dateFilter_row}>*/}
                {/*    <span>Date:</span>*/}
                {/*    <InputSelectItem id={filterBy.id} name={filterBy.name} optionsArr={filterBy.optionsArr}/>*/}
                {/*</div>*/}
                <div className={style.dateFilter_row}>
                    <span>Between:</span>
                    <input type="date" disabled={disabledDate} value={date.dateFrom} onChange={(e) => { setDateBetweenHandler(e)}} />
                </div>
                <div className={style.dateFilter_row}>
                    <span>And:</span>
                    <input type="date" disabled={disabledDate} value={date.dateTo} onChange={(e) => { setDateAndHandler(e)}} />
                </div>
                <div className={style.dateFilter_row}>
                    <span>OR:</span>
                    <InputSelectItem id={filterByPeriod.id} name={filterByPeriod.name} optionsArr={filterByPeriod.optionsArr} selectValueHandler={setDatePeriodValueHandler}/>
                </div>
                {/*<div className={style.dateFilter_row}>*/}
                {/*    <span>Lien Status:</span>*/}
                {/*    <InputSelectItem id={lienStatus.id} name={lienStatus.name} optionsArr={lienStatus.optionsArr}/>*/}
                {/*</div>*/}
            </div>

        </div>
    )
}

export default DateBlock;
// 123

// document.querySelector("input[type='date']")