import {FC} from "react";


type CheckboxPropsType = {
    id: any;
    name: string;
}

const Checkbox: FC<CheckboxPropsType> = ({id, name}) => {
    return (
        <>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{name}</label>
        </>
    )
}

export default Checkbox;