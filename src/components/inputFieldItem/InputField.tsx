import {ChangeEvent, FC} from 'react';
import style from './InputField.module.scss'

export type InputFieldPropsType = {
    id: string;
    title: string;
    value: string;
    inputChangeHandler: (id:string, event:ChangeEvent<HTMLInputElement>) => void
}
const InputField: FC<InputFieldPropsType> = ({id, title, value, inputChangeHandler}) => {
    return (
        <div className={style.inputField_container}>
            <label htmlFor={id}>{title}</label>
            <input type="text" id={id} value={value} onChange={ (event) => {inputChangeHandler(id, event)}}/>
        </div>
    )
}

export default InputField;