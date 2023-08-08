import style from './InputFieldsGroup.module.scss'
import InputField, {InputFieldPropsType} from "@/src/components/inputFieldItem/InputField";
import {ChangeEvent, FC} from "react";
import {useAppDispatch} from "@/src/redux/hooks";
import {setInputField} from "@/src/redux/searchBlockSlice/searchBlockSlice";
// import {setInputField} from "@/src/redux/fieldsSlice/fieldsSlice";

type InputFieldType = {
    id: string;
    title: string;
    value: string;
}

type InputFieldsGroupPropsType = {
    title: string;
    fields: Array<InputFieldType>
}


const InputFieldsGroup: FC<InputFieldsGroupPropsType> = ({title, fields}) => {
    const dispatch = useAppDispatch();

    const inputChangeHandler = (id:string, event:ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputField({id, payload:event.target.value}))
    }

    return (
        <div className={style.inputFields_container}>
            <h5>{title}</h5>
            <div className={style.inputFields_block}>
                {fields.map((fieldItem) => <InputField key={fieldItem.id} id={fieldItem.id}
                                                       title={fieldItem.title} value={fieldItem.value}
                                                       inputChangeHandler={inputChangeHandler}/>)}
            </div>
        </div>
    )
}

export default InputFieldsGroup;