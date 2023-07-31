import style from './InputFieldsGroup.module.scss'
import InputField, {InputFieldPropsType} from "@/src/components/inputFieldItem/InputField";
import {FC} from "react";

type InputFieldsGroupPropsType = {
    title: string;
    fieldsArr: Array<InputFieldPropsType>
}
const InputFieldsGroup: FC<InputFieldsGroupPropsType> = ({title, fieldsArr}) => {
    return (
        <div className={style.inputFields_container}>
            <h5>{title}</h5>
            <div className={style.inputFields_block}>
                {fieldsArr.map((fieldItem) => <InputField key={fieldItem.id} id={fieldItem.id}
                                                          title={fieldItem.title}/>)}
            </div>
        </div>
    )
}

export default InputFieldsGroup;