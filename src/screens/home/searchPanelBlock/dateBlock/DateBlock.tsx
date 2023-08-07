import style from './DateBlock.module.scss'

import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/src/redux/hooks";
import {getDateAnd, getDateBetween} from "@/src/redux/dateSlice/dateSlice";
import Checkbox from "@/src/components/checkbox/Checkbox";

const DateBlock = () => {
    const dateSlice = useAppSelector((state) =>  state.date );
    const dispatch = useAppDispatch();
    const [disabledDate, setDisabledDate] = useState(false)

    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    const setDateBetweenHandler = (e:any) => {
        dispatch(getDateBetween(e.target.value))
    }
    const setDateAndHandler = (e:any) => {
        dispatch(getDateAnd(e.target.value))
    }

    const toggleDateSwitcher = () => {
        setDisabledDate(!disabledDate);
    }

    useEffect(() => {
        if(disabledDate){
            dispatch(getDateBetween(''));
            dispatch(getDateAnd(''));
        }
        if(!disabledDate) {
            dispatch(getDateBetween(getCurrentDate()));
            dispatch(getDateAnd(getCurrentDate()));
        }

    }, [disabledDate])

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
                    <input type="date" disabled={disabledDate} value={dateSlice.between} onChange={(e) => { setDateBetweenHandler(e)}} />
                </div>
                <div className={style.dateFilter_row}>
                    <span>And:</span>
                    <input type="date" disabled={disabledDate} value={dateSlice.and} onChange={(e) => { setDateAndHandler(e)}} />
                </div>
                {/*<div className={style.dateFilter_row}>*/}
                {/*    <span>OR:</span>*/}
                {/*    <InputSelectItem id={filterByPeriod.id} name={filterByPeriod.name} optionsArr={filterByPeriod.optionsArr}/>*/}
                {/*</div>*/}
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