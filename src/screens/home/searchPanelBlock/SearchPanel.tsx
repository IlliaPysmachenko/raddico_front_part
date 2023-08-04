import style from './SearchPanel.module.scss'
import InputFieldsGroup from "@/src/components/inputFieldsGroup/InputFieldsGroup";
import { fieldsArr, statuses} from "@/src/data/dataExamples";
import CheckboxGroup from "@/src/components/checkboxGroup/CheckboxGroup";
import DateBlock from "@/src/screens/home/searchPanelBlock/dateBlock/DateBlock";
import {useAppSelector} from "@/src/redux/hooks";

const SearchPanel = () => {
    const modality = useAppSelector((state) =>  state.modality )
    const facilities = useAppSelector((state) => {
        console.log(state);
        return state.institutions
    })

    return (
        <div className={style.searchPanel_container}>
            <div className={style.searchPanel_column}>
                <div className={style.searchPanel_title}>
                    <h5>Advanced Search Panel</h5>
                </div>

                <div className={style.searchPanel_row}>
                    <InputFieldsGroup title={`Searching Fields`} fieldsArr={fieldsArr}/>
                    <CheckboxGroup title={'Institutions'} checkboxArr={facilities}/>
                    <DateBlock/>
                    <CheckboxGroup title={'Modality'} checkboxArr={modality}/>
                    <CheckboxGroup title={'Statuses'} checkboxArr={statuses}/>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default SearchPanel