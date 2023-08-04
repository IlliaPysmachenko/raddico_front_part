import style from './InputSelectItem.module.scss'
import {FC} from "react";


type optionsArrType = {
    value: string;
    title: string;
    checked: boolean;
}

type SelectItemType = {
    id: string;
    name: string;
    optionsArr: Array<optionsArrType>;
}

const InputSelectItem: FC<SelectItemType> = ({id, name, optionsArr}) => {
    return (
        <div className={style.selectItem_container}>
            <select name={name} id={id}>
                {optionsArr.map((option) => <option key={option.value}
                                                    value={option.value}
                                                    selected={option.checked}>{option.title}</option>)}
            </select>
        </div>

    )
}

export default InputSelectItem;