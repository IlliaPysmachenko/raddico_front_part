import {FC} from "react";

import style from './Checkbox.module.scss'


type CheckboxPropsType = {
    id: any;
    name: string;
    isChecked: boolean;
}

const Checkbox: FC<CheckboxPropsType> = ({id, name, isChecked}) => {
    return (
        <div className={style.checkboxContainer}>
            <input type="checkbox" checked={isChecked} id={id}/>
            <label htmlFor={id} className={style.checkboxLabel}>{name}</label>
        </div>
    )
}

export default Checkbox;