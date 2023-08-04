//Checkboxes data example
export const facilities = [
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
export const modality = [
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
export const statuses = [
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
export const fieldsArr = [
    {
        id: 'patient_id',
        title: 'Patients MRN',
    },
    {
        id: 'patient_name',
        title: 'Patients Name',
    },
    {
        id: 'patient_dob',
        title: 'Patients DOB',
    },
    {
        id: 'referral',
        title: 'Referring Physician',
    },
]
//------------------------

//Select items data example
export const filterBy = {
    id: 'filterBy',
    name: 'filterBy',
    optionsArr: [
        {
            value: 'DOE',
            title: 'Date of Examination',
            checked: false,
        },
        {
            value: 'DOM',
            title: 'Date of Modification',
            checked: false,
        },
        {
            value: 'DOA',
            title: 'Date of Arrival',
            checked: false,
        },
        {
            value: 'DOD',
            title: 'Date of Dictation',
            checked: false,
        },
        {
            value: 'DOT',
            title: 'Date of Transcription',
            checked: false,
        },
    ]
}
export const filterByPeriod = {
    id: 'filterByPeriod',
    name: 'filterByPeriod',
    optionsArr: [
        {
            value: '',
            title: '*',
            checked: true,
        },
        {
            value: 'Y',
            title: 'Yesterday',
            checked: false,
        },
        {
            value: 'TW',
            title: 'This Week',
            checked: false,
        },
        {
            value: 'LW',
            title: 'Last week',
            checked: false,
        },
        {
            value: 'TM',
            title: 'This Month',
            checked: false,
        },
        {
            value: 'LM',
            title: 'Last Month',
            checked: false,
        },
    ]
}
export const lienStatus = {
    id: 'lienStatus',
    name: 'lienStatus',
    optionsArr: [
        {
            value: '',
            title: '*',
            checked: true,
        },
        {
            value: 'LU',
            title: 'Lien UnSigned',
            checked: false,
        },
        {
            value: 'LPS',
            title: 'Lien Pending Signature',
            checked: false,
        },
    ]
}

// export const selectItem = {
//     id: 'date',
//     name: 'date',
//     optionsArr: [
//         {
//             value: '01',
//             title: '01',
//             checked: false,
//         },
//         {
//             value: '02',
//             title: '02',
//             checked: false,
//         },
//         {
//             value: '03',
//             title: '03',
//             checked: false,
//         },
//         {
//             value: '04',
//             title: '04',
//             checked: false,
//         },
//         {
//             value: '05',
//             title: '05',
//             checked: false,
//         },
//         {
//             value: '06',
//             title: '06',
//             checked: false,
//         },
//         {
//             value: '07',
//             title: '07',
//             checked: true,
//         },
//         {
//             value: '08',
//             title: '08',
//             checked: false,
//         },
//         {
//             value: '09',
//             title: '09',
//             checked: false,
//         },
//         {
//             value: '10',
//             title: '10',
//             checked: false,
//         },
//         {
//             value: '11',
//             title: '11',
//             checked: false,
//         },
//         {
//             value: '12',
//             title: '12',
//             checked: false,
//         },
//     ]
// }
