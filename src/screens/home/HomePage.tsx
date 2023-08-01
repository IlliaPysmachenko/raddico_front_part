import style from './HomePage.module.scss';
import CheckboxGroup from "@/src/components/checkboxGroup/CheckboxGroup";
import InputFieldsGroup from "@/src/components/inputFieldsGroup/InputFieldsGroup";
import InputSelectItem from "@/src/components/inputSelectItem/InputSelectItem";
import {facilities, fieldsArr, modality, filterBy, statuses} from "@/src/data/dataExamples";
import DateBlock from "@/src/screens/home/dateBlock/DateBlock";

const HomePage = () => {

    return (
        <>
            <div className={style.searchPanel_container}>
                <div className={style.searchPanel_column}>
                    <div className={style.searchPanel_title}>
                        <h5>Advanced Search Panel</h5>
                    </div>

                    <div className={style.searchPanel_row}>
                        <InputFieldsGroup title={`Searching Fields`} fieldsArr={fieldsArr}/>
                        <CheckboxGroup title={'Facilities'} checkboxArr={facilities}/>
                        <DateBlock/>
                        <CheckboxGroup title={'Modality'} checkboxArr={modality}/>
                        <CheckboxGroup title={'Statuses'} checkboxArr={statuses}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage;