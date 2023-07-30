import style from './CheckboxGroup.module.scss'
import Checkbox from "@/src/components/checkbox/Checkbox";

const CheckboxGroup = () => {
    return (
        <div className={style.checkboxGroup_container}>
            <h4>Title</h4>
            <div className={style.checkboxes_block}>
                <Checkbox id={`id1`} name={`Checkbox1`} isChecked={false}/>
                <Checkbox id={`id2`} name={`Checkbox2`} isChecked={true}/>
                <Checkbox id={`id3`} name={`Checkbox3`} isChecked={false}/>
            </div>
        </div>
    )
}

export default CheckboxGroup;