import { FC } from 'react';
import style from './CheckboxGroup.module.scss'
import Checkbox, {CheckboxPropsType} from "@/src/components/checkbox/Checkbox";

type CheckboxesArray = {
    id: string;
    name: string;
    isChecked: boolean;
}

type CheckboxGroupPropsType = {
    title: string;
    checkboxArr: Array<CheckboxesArray>;
    toggleCheckboxHandler: (id:string, title: string) => void;

}

const CheckboxGroup:FC<CheckboxGroupPropsType> = ({title, checkboxArr, toggleCheckboxHandler}) => {

    return (
        <div className={style.checkboxGroup_container}>
            <h5>{title}</h5>
            <div className={style.checkboxes_block}>
                {checkboxArr.map((item) => (
                    <Checkbox key={item.id} id={item.id} name={item.name} isChecked={item.isChecked} title={title}  toggleCheckboxHandler={toggleCheckboxHandler}/>)
                )}
            </div>
        </div>
    )
}

export default CheckboxGroup;