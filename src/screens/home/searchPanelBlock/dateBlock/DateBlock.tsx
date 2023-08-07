import style from './DateBlock.module.scss'
import InputSelectItem from "@/src/components/inputSelectItem/InputSelectItem";
import {filterBy, filterByPeriod, lienStatus} from "@/src/data/dataExamples";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/src/redux/hooks";
import {getDateAnd, getDateBetween} from "@/src/redux/dateSlice/dateSlice";

const DateBlock = () => {
    const dateSlice = useAppSelector((state) =>  state.date );
    const dispatch = useAppDispatch();

    const setDateBetweenHandler = (e:any) => {
        dispatch(getDateBetween(e.target.value))
    }
    const setDateAndHandler = (e:any) => {
        dispatch(getDateAnd(e.target.value))
    }

    return(
        <div className={style.dateFilter_container}>
            <h5>Date filter</h5>

            <div className={style.dateFilter_block}>
                {/*<div className={style.dateFilter_row}>*/}
                {/*    <span>Date:</span>*/}
                {/*    <InputSelectItem id={filterBy.id} name={filterBy.name} optionsArr={filterBy.optionsArr}/>*/}
                {/*</div>*/}
                <div className={style.dateFilter_row}>
                    <span>Between:</span>
                    <input type="date" value={dateSlice.between} onChange={(e) => { setDateBetweenHandler(e)}} />
                </div>
                <div className={style.dateFilter_row}>
                    <span>And:</span>
                    <input type="date" value={dateSlice.and} onChange={(e) => { setDateAndHandler(e)}} />
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