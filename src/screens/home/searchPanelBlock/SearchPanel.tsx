import style from './SearchPanel.module.scss'
import InputFieldsGroup from "@/src/components/inputFieldsGroup/InputFieldsGroup";
import {facilities, fieldsArr, modality, statuses} from "@/src/data/dataExamples";
import CheckboxGroup from "@/src/components/checkboxGroup/CheckboxGroup";
import DateBlock from "@/src/screens/home/searchPanelBlock/dateBlock/DateBlock";

const SearchPanel = () => {
    return (
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
                    <CheckboxGroup title={'Modality'} checkboxArr={modality}/>
                </div>
            </div>
        </div>
    )
}

export default SearchPanel