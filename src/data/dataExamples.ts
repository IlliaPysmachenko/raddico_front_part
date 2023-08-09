//Checkboxes data example

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
            value: 'Yesterday',
            title: 'Yesterday',
            checked: false,
        },
        {
            value: 'This_Week',
            title: 'This Week',
            checked: false,
        },
        {
            value: 'Last_Week',
            title: 'Last Week',
            checked: false,
        },
        {
            value: 'This_Month',
            title: 'This Month',
            checked: false,
        },
        {
            value: 'Last_Month',
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

