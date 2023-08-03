import style from './StudiesBlock.module.scss'
import React from "react";
import Checkbox from "@/src/components/checkbox/Checkbox";

const studyTitles = [
    {
        id: 'icon',
        title: 'icon',
    },
    {
        id: 'Patient MRN',
        title: 'Patient MRN',
    },
    {
        id: 'Name',
        title: 'Name',
    },
    {
        id: 'Sex',
        title: 'Sex',
    },
    {
        id: 'DOB',
        title: 'DOB',
    },
    {
        id: 'Modality',
        title: 'Modality',
    },
    {
        id: 'Procedure',
        title: 'Procedure',
    },
    {
        id: 'Symptoms',
        title: 'Symptoms',
    },
    {
        id: 'Notes',
        title: 'Notes',
    },
    {
        id: '#lm',
        title: '#lm',
    },
    {
        id: 'Imaging Center',
        title: 'Imaging Center',
    },
    {
        id: 'Value',
        title: 'Value',
    },
    {
        id: 'Study Date',
        title: 'Study Date',
    },
    {
        id: 'Referer',
        title: 'Referer',
    },
    {
        id: 'Assignment',
        title: 'Assignment',
    },
    {
        id: 'Status',
        title: 'Status',
    },
    {
        id: 'Need Proofreading by',
        title: 'Need Proofreading by',
    },
    {
        id: 'Action',
        title: 'Action',
    },
    {
        id: 'checked',
        title: 'checked',
    }
]
const patientsData = [
    {
        id: '1',
        icons: 'i',
        mrn: 'WDR01285',
        name: 'GUTIERREZ, JUDITAS',
        sex: 'M',
        dob: '1992-11-02',
        modality: 'MR',
        procedure: 'CERVICAL SPINE',
        symptoms: 'MVA NECK PAIN, EPIDURAL TREATMENT AROUND BACK 2017',
        notes: '[PI LIEN] COMPARISON REPORT REQUESTED BY ATTY, MRN#SDR22538, PRIOR REPORT UPLOADED, YK',
        lm: '110/110',
        imgCenter: 'WESTERN DIAGNOSTIC RADIOLOGY',
        value: '1',
        studyDate: '2023-08-01 12:55:38',
        referrer: 'MASROUR, ROUZBEH D.C.^^^^ ',
        assignment: 'Dr A Bledin',
        status: 'UNREAD',
        proofreading: '',
        action: '',
        checked: false,
    },
    {
        id: '2',
        icons: 'i',
        mrn: 'OMI23251',
        name: 'LOPEZ, CORINA',
        sex: 'F',
        dob: '1987-05-11',
        modality: 'MR',
        procedure: 'CERVICAL SPINE',
        symptoms: 'Neck pain due to injury',
        notes: '[PRECISE] bb',
        lm: '269/ 269',
        imgCenter: 'OCEAN MEDICAL IMAGING',
        value: '1',
        studyDate: '2023-08-01 13:28:54',
        referrer: 'KENLY, MICHAEL M.D.^^^^',
        assignment: 'Tech Only',
        status: 'Precise',
        // proofreading: '',
        action: '',
        checked: false,
    },
]

const StudiesBlock = () => {
    return(
        <div className={`${style.study_container} ${style.study_grid}`}>
            {studyTitles.map( (item) => {
                return (<div key={item.id} className={style.study_header}>{item.title}</div>)
            })}


            {patientsData.map( (item) => {
                return (
                    <React.Fragment key={item.id}>
                        <div className={style.grid_item}>{item.icons}</div>
                        <div className={style.grid_item}>{item.mrn}</div>
                        <div className={style.grid_item}>{item.name}</div>
                        <div className={style.grid_item}>{item.sex}</div>
                        <div className={style.grid_item}>{item.dob}</div>
                        <div className={style.grid_item}>{item.modality}</div>
                        <div className={style.grid_item}>{item.procedure}</div>
                        <div className={style.grid_item}>{item.symptoms}</div>
                        <div className={style.grid_item}>{item.notes}</div>
                        <div className={style.grid_item}>{item.lm}</div>
                        <div className={style.grid_item}>{item.imgCenter}</div>
                        <div className={style.grid_item}>{item.value}</div>
                        <div className={style.grid_item}>{item.studyDate}</div>
                        <div className={style.grid_item}>{item.referrer}</div>
                        <div className={style.grid_item}>{item.assignment}</div>
                        <div className={style.grid_item}>{item.status}</div>
                        <div className={style.grid_item}>{item.action}</div>
                        <div className={style.grid_item}>{item.proofreading}</div>
                        <div className={style.grid_item}><Checkbox id={item.id} name={''} isChecked={item.checked}/></div>
                    </React.Fragment>
                )
            })}

        </div>
    )
}

export default StudiesBlock;