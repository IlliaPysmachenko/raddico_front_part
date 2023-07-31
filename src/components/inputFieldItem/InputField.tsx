import { FC } from 'react';
import style from './InputField.module.scss'

export type InputFieldPropsType = {
    id: string;
    title: string;
}
const InputField: FC<InputFieldPropsType> = ({id, title}) => {
    return (
        <div className={style.inputField_container}>
            <label htmlFor={id}>{title}</label>
            <input type="text" id={id}/>
        </div>
    )
}

export default InputField;