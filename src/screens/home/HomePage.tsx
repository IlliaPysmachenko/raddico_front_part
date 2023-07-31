import style from './HomePage.module.scss';
import CheckboxGroup from "@/src/components/checkboxGroup/CheckboxGroup";
import InputFieldsGroup from "@/src/components/inputFieldsGroup/InputFieldsGroup";
import InputSelectItem from "@/src/components/inputSelectItem/InputSelectItem";
import {facilities, fieldsArr, modality, selectItem, statuses} from "@/src/data/dataExamples";

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
                        <CheckboxGroup title={'Modality'} checkboxArr={modality}/>
                        <CheckboxGroup title={'Statuses'} checkboxArr={statuses}/>
                        <InputSelectItem id={selectItem.id} name={selectItem.name} optionsArr={selectItem.optionsArr}/>
                        <input type="date"/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage;