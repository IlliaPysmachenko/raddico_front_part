import {useState} from "react";
import Checkbox from "@/src/components/checkbox/Checkbox";
import style from './HomePage.module.scss';
import CheckboxGroup from "@/src/components/checkboxGroup/CheckboxGroup";


const facilities = [
    {
        id: '1',
        name: 'BOI',
        isChecked: false,
    },
    {
        id: '2',
        name: 'GHR',
        isChecked: false,
    },
    {
        id: '3',
        name: 'HRI',
        isChecked: false,
    },
    {
        id: '4',
        name: 'OTHERS',
        isChecked: false,
    },
    {
        id: '5',
        name: 'SDR',
        isChecked: false,
    },
    {
        id: '6',
        name: 'SRD(WHR)',
        isChecked: false,
    },
    {
        id: '7',
        name: 'WDR',
        isChecked: false,
    },
    {
        id: '8',
        name: 'CAD',
        isChecked: false,
    },
    {
        id: '9',
        name: 'HCP',
        isChecked: false,
    },
    {
        id: '10',
        name: 'OMI',
        isChecked: false,
    },
    {
        id: '11',
        name: 'RTO',
        isChecked: false,
    },
    {
        id: '12',
        name: 'SDR(WDR)',
        isChecked: false,
    },
    {
        id: '13',
        name: 'UNDEFINED',
        isChecked: false,
    },
    {
        id: '14',
        name: 'WHR',
        isChecked: false,
    },
]
const modality = [
    {
        id: 'DC',
        name: 'DC',
        isChecked: false,
    },
    {
        id: 'SC',
        name: 'SC',
        isChecked: false,
    },
    {
        id: 'CT',
        name: 'CT',
        isChecked: false,
    },
    {
        id: 'SR',
        name: 'SR',
        isChecked: false,
    },
    {
        id: 'OT',
        name: 'OT',
        isChecked: false,
    },
    {
        id: 'US',
        name: 'US',
        isChecked: false,
    },
    {
        id: 'MR',
        name: 'MR',
        isChecked: false,
    },
    {
        id: 'PR',
        name: 'PR',
        isChecked: false,
    },
    {
        id: 'CR',
        name: 'CR',
        isChecked: false,
    },
    {
        id: 'KO',
        name: 'KO',
        isChecked: false,
    },
    {
        id: 'DR',
        name: 'DR',
        isChecked: false,
    },
    {
        id: 'XA',
        name: 'XA',
        isChecked: false,
    },
]
const statuses = [
    {
        id: 'NP',
        name: 'Needs Proofreading',
        isChecked: false,
    },
    {
        id: 'TNA',
        name: 'Transcribed Not Attached',
        isChecked: false,
    },
    {
        id: 'TO',
        name: 'Tech Only',
        isChecked: false,
    },
    {
        id: 'P',
        name: 'Precise',
        isChecked: false,
    },
    {
        id: 'D',
        name: 'DISREGARD',
        isChecked: false,
    },
    {
        id: '2O',
        name: '2nd Opinion',
        isChecked: false,
    },
    {
        id: 'DI',
        name: 'DICTATED',
        isChecked: false,
    },
    {
        id: 'UN',
        name: 'UNREAD',
        isChecked: false,
    },
    {
        id: 'T',
        name: 'TRANSCRIBED',
        isChecked: false,
    },
    {
        id: 'R',
        name: 'REVIEWED',
        isChecked: false,
    },
    {
        id: 'PH',
        name: 'Phantom',
        isChecked: false,
    },
    {
        id: 'DF',
        name: 'DictatedFTP',
        isChecked: false,
    },
    {
        id: 'CO',
        name: 'COMPARISON',
        isChecked: false,
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
                        <h4>Advanced Search Panel</h4>
                    </div>

                    <div className={style.searchPanel_row}>
                        <CheckboxGroup title={'Facilities'} checkboxArr={facilities}/>
                        <CheckboxGroup title={'Modality'} checkboxArr={modality}/>
                        <CheckboxGroup title={'Statuses'} checkboxArr={statuses}/>
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