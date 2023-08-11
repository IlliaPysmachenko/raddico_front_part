import {FC} from 'react';
import style from './CheckboxGroup.module.scss'
import Checkbox from "@/src/components/checkbox/Checkbox";
import {CheckboxesType} from "@/src/redux/searchBlockSlice/searchBlockTypes";
import {useAppDispatch} from "@/src/redux/hooks";
import {setToggleAllCheckbox} from "@/src/redux/searchBlockSlice/searchBlockSlice";


type CheckboxGroupPropsType = {
    id: string;
    title: string;
    isAllChecked: boolean;
    checkboxArr: Array<CheckboxesType>;
    toggleCheckboxHandler: (id: string, title: string) => void;
}

const CheckboxGroup: FC<CheckboxGroupPropsType> = ({id, title, checkboxArr, isAllChecked, toggleCheckboxHandler}) => {
    const dispatch = useAppDispatch();

    const toggleAllCheckboxHandler = () => {
        // debugger
        dispatch(setToggleAllCheckbox(id))
    }

    return (
        <div className={style.checkboxGroup_container}>
            <h5>{title}</h5>
            <Checkbox id={id} name={''} isChecked={isAllChecked} title={title}
                      toggleCheckboxHandler={toggleAllCheckboxHandler}/>
            <div className={style.checkboxes_block}>
                {checkboxArr.map((item) => (
                    <Checkbox key={item.id} id={item.id} name={item.name} isChecked={item.isChecked} title={title}
                              toggleCheckboxHandler={toggleCheckboxHandler}/>)
                )}
            </div>
        </div>
    )
}

export default CheckboxGroup;