import style from './SearchPanel.module.scss'
import InputFieldsGroup from "@/src/components/inputFieldsGroup/InputFieldsGroup";
import CheckboxGroup from "@/src/components/checkboxGroup/CheckboxGroup";
import DateBlock from "@/src/screens/home/searchPanelBlock/dateBlock/DateBlock";
import {useAppDispatch, useAppSelector} from "@/src/redux/hooks";
import {getStudiesThunk} from "@/src/redux/studiesSlice/studiesSlice";
import {useEffect} from "react";
import {
    getOptions,
    setToggleCheckboxInstitutions,
    setToggleCheckboxModality
} from "@/src/redux/searchBlockSlice/searchBlockSlice";

const SearchPanel = () => {
    const dispatch = useAppDispatch();
    const modality = useAppSelector((state) => state.searchBlock.modality)
    const institutions = useAppSelector((state) => state.searchBlock.institutions)
    const fields = useAppSelector(state => state.searchBlock.fields);
    const dateSlice = useAppSelector((state) => state.searchBlock.date);
    const csrf = useAppSelector((state) => state.searchBlock.csrf);

    const UseInpFieldValue = (id: string) => {
        let field = fields.find(item => item.id === id);
        // console.log(field)
        if (field) {
            return field.value
        } else {
            return
        }

    }

    const checkedModality = useAppSelector(state => {
        let arr: Array<string> = []
        let checkedItem = state.searchBlock.modality.filter(item => item.isChecked)
        if (checkedItem) {
            checkedItem.map(item => {
                arr.push(item.name)
            })
        }
        return arr;
    })
    const checkedFacilities = useAppSelector(state => {
        let arr: Array<string> = []
        let checkedItem = state.searchBlock.institutions.filter(item => item.isChecked)
        if (checkedItem) {
            checkedItem.map(item => {
                arr.push(item.name)
            })
        }
        return arr;
    })

    const SendSearchQuery = () => {

        const createPayload = () => ({
            modalities: checkedModality,
            institutions: checkedFacilities,
            study_date_from: dateSlice.dateFrom,
            study_date_to: dateSlice.dateTo,
            patient_id: UseInpFieldValue('patient_id'),
            patient_name: UseInpFieldValue('patient_name'),
            patient_dob: UseInpFieldValue('patient_dob'),
            refferal: UseInpFieldValue('referral'),
            csrf,
        });
        dispatch(getStudiesThunk(createPayload()))
    }

    useEffect(() => {
        dispatch(getOptions());
    }, [])


    const toggleCheckboxHandler = (id: string, title: string) => {
        if (title === 'Modality') dispatch(setToggleCheckboxModality(id));
        if (title === 'Institutions') dispatch(setToggleCheckboxInstitutions(id));
    }

    return (
        <div className={style.searchPanel_container}>
            <div className={style.searchPanel_column}>
                <div className={style.searchPanel_title}>
                    <h5>Advanced Search Panel</h5>
                </div>

                <div className={style.searchPanel_row}>
                    <InputFieldsGroup title={`Searching Fields`} fields={fields}/>
                    <CheckboxGroup title={'Institutions'} checkboxArr={institutions}
                                   toggleCheckboxHandler={toggleCheckboxHandler}/>
                    <DateBlock/>
                    <CheckboxGroup title={'Modality'} checkboxArr={modality}
                                   toggleCheckboxHandler={toggleCheckboxHandler}/>
                    {/*<CheckboxGroup title={'Statuses'} checkboxArr={statuses}/>*/}
                    <div className={style.searchBtn_container}>
                        <button className={style.searchBtn} onClick={SendSearchQuery}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPanel