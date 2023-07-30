import {useState} from "react";
import Checkbox from "@/src/components/checkbox/Checkbox";
import style from './HomePage.module.scss';
import CheckboxGroup from "@/src/components/checkboxGroup/CheckboxGroup";


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
            <div className={style.searchPanel_container}>
                <div className={style.searchPanel_column}>
                    <div className={style.searchPanel_title}>
                        <h3>Advanced Search Panel</h3>
                    </div>

                    <div className={style.searchPanel_row}>
                        <CheckboxGroup/>
                    </div>

                    {/*{checkboxArr.map( (checkbox) => {*/}
                    {/*    return (*/}
                    {/*        <Checkbox key={checkbox.id} id={checkbox.id} name={checkbox.name} isChecked={checkbox.isChecked}/>*/}
                    {/*    )*/}
                    {/*})}*/}
                </div>
            </div>

        </>
    )
}

export default HomePage;