import style from './InputSelectItem.module.scss'
import {ChangeEvent, FC} from "react";


type optionsArrType = {
    value: string;
    title: string;
    checked: boolean;
}

type SelectItemType = {
    id: string;
    name: string;
    optionsArr: Array<optionsArrType>;
    selectValueHandler: (id:string, e:ChangeEvent<HTMLSelectElement>) => void;
}

const InputSelectItem: FC<SelectItemType> = ({id, name, optionsArr,selectValueHandler}) => {


    return (
        <div className={style.selectItem_container}>
            <select name={name} id={id} onChange={(e) => {selectValueHandler(id, e)}}>
                {optionsArr.map((option) => <option key={option.value}
                                                    value={option.value}
                                                    selected={option.checked}>{option.title}</option>)}
            </select>
        </div>

    )
}

export default InputSelectItem;