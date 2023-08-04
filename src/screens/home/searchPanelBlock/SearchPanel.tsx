import style from './SearchPanel.module.scss'
import InputFieldsGroup from "@/src/components/inputFieldsGroup/InputFieldsGroup";
import { fieldsArr, statuses} from "@/src/data/dataExamples";
import CheckboxGroup from "@/src/components/checkboxGroup/CheckboxGroup";
import DateBlock from "@/src/screens/home/searchPanelBlock/dateBlock/DateBlock";
import {useAppDispatch, useAppSelector} from "@/src/redux/hooks";
import {toggleCheckboxModality} from "@/src/redux/modalitySlice/modalitySlice";
import {toggleCheckboxInstitutions} from "@/src/redux/institutionsSlice/institutionsSlice";
import {getStudiesThunk} from "@/src/redux/studiesSlice/studiesSlice";
import {useEffect} from "react";
import {searchApi} from "@/src/api/api";

const SearchPanel = () => {
    const dispatch = useAppDispatch();
    const modality = useAppSelector((state) =>  state.modality )
    const facilities = useAppSelector((state) => state.institutions)
    const fields = useAppSelector(state => state.fields);
    const dateSlice = useAppSelector((state) =>  state.date );

    // const useInpFieldValue = (id:string) => {
    //     let field =  fields.find(item => item.id === id);
    //     console.log(field)
    //     if (field) field.value
    //     // console.log(field.value)
    // }


    const patient_name = useAppSelector(state => {
        let field = state.fields.find(item => item.id === 'patient_name')
        if (field) {
            return field
        }
    })
    // console.log(patient_name)
    const checkedModality = useAppSelector(state => {
         return state.modality.filter(item => item.isChecked)
    })
    const checkedFacilities = useAppSelector(state => {
        return state.institutions.filter(item => item.isChecked)
    })

    const SendSearchQuery = () => {
        const data = {}
        // @ts-ignore
        data.modalities = checkedModality.map((item) => item.name)
        // @ts-ignore
        data.institutions = checkedFacilities.map((item) => item.name)
        // @ts-ignore
        data.study_date_from = dateSlice.between;
        // @ts-ignore
        data.study_date_to = dateSlice.and;
        // @ts-ignore
        data.patient_id = fields[0].value;
        // @ts-ignore
        data.patient_name = fields[1].value;
        // @ts-ignore
        data.patient_dob = fields[2].value;
        // @ts-ignore
        data.refferal = fields[3].value;
        // console.log(query);
        dispatch(getStudiesThunk({data}))
    }

    useEffect(() => {
        searchApi.getValues()
    },[])




    const toggleCheckboxHandler = (id:string, title:string) => {
        if(title === 'Modality') dispatch(toggleCheckboxModality(id));
        if(title === 'Institutions') dispatch(toggleCheckboxInstitutions(id));
    }

    return (
        <div className={style.searchPanel_container}>
            <div className={style.searchPanel_column}>
                <div className={style.searchPanel_title}>
                    <h5>Advanced Search Panel</h5>
                </div>

                <div className={style.searchPanel_row}>
                    <InputFieldsGroup title={`Searching Fields`} fields={fields}/>
                    <CheckboxGroup title={'Institutions'} checkboxArr={facilities} toggleCheckboxHandler={toggleCheckboxHandler}/>
                    <DateBlock/>
                    <CheckboxGroup title={'Modality'} checkboxArr={modality} toggleCheckboxHandler={toggleCheckboxHandler}/>
                    {/*<CheckboxGroup title={'Statuses'} checkboxArr={statuses}/>*/}
                    <div className={style.searchBtn_container}><button className={style.searchBtn} onClick={SendSearchQuery}>Search</button></div>
                </div>
            </div>
        </div>
    )
}

export default SearchPanel