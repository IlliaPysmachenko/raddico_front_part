import style from './DateBlock.module.scss'
import InputSelectItem from "@/src/components/inputSelectItem/InputSelectItem";
import {filterBy, filterByPeriod, lienStatus} from "@/src/data/dataExamples";

const DateBlock = () => {
    return(
        <div className={style.dateFilter_container}>
            <h5>Date filter</h5>

            <div className={style.dateFilter_block}>
                <div className={style.dateFilter_row}>
                    <span>Date:</span>
                    <InputSelectItem id={filterBy.id} name={filterBy.name} optionsArr={filterBy.optionsArr}/>
                </div>
                <div className={style.dateFilter_row}>
                    <span>Between:</span>
                    <input type="date"/>
                </div>
                <div className={style.dateFilter_row}>
                    <span>And:</span>
                    <input type="date"/>
                </div>
                <div className={style.dateFilter_row}>
                    <span>OR:</span>
                    <InputSelectItem id={filterByPeriod.id} name={filterByPeriod.name} optionsArr={filterByPeriod.optionsArr}/>
                </div>
                <div className={style.dateFilter_row}>
                    <span>Lien Status:</span>
                    <InputSelectItem id={lienStatus.id} name={lienStatus.name} optionsArr={lienStatus.optionsArr}/>
                </div>


            </div>

        </div>
    )
}

export default DateBlock;