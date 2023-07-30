import { FC } from 'react';
import style from './CheckboxGroup.module.scss'
import Checkbox, {CheckboxPropsType} from "@/src/components/checkbox/Checkbox";



type CheckboxGroupPropsType = {
    title: string;
    checkboxArr: Array<CheckboxPropsType>;

}

const CheckboxGroup:FC<CheckboxGroupPropsType> = ({title, checkboxArr}) => {
    return (
        <div className={style.checkboxGroup_container}>
            <h5>{title}</h5>
            <div className={style.checkboxes_block}>
                {checkboxArr.map((item) => (
                    <Checkbox key={item.id} id={item.id} name={item.name} isChecked={item.isChecked}/>)
                )}
            </div>
        </div>
    )
}

export default CheckboxGroup;