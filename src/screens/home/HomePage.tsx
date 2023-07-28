import Checkbox from "@/src/components/checkbox/Checkbox";
import {useState} from "react";


const checkboxArr = [
    {
        id: 'id1',
        name:'Checkbox1',
        isChecked: true,
    },
    {
        id: 'id2',
        name:'Checkbox2',
        isChecked: false,
    },
    {
        id: 'id3',
        name:'Checkbox3',
        isChecked: true,
    },
]

const HomePage = () => {

    const setCheckboxIsCheckedHandler = (id:any, isChecked:boolean) =>{

    }

    return (
        <>
            <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cupiditate debitis dicta, est
                harum praesentium quod sapiente suscipit tempore ut.
            </h1>
            {checkboxArr.map( (checkbox) => {
                return (
                    <Checkbox key={checkbox.id} id={checkbox.id} name={checkbox.name} isChecked={checkbox.isChecked}/>
                )
            } )}


        </>
    )
}

export default HomePage;