
type CheckboxesType = {
    id: string;
    name: string;
    isChecked: boolean;
}

type DateType = {
    dateFrom: string;
    dateTo: string;
}

type FieldsType = {
    id: string;
    title: string;
    value: string;
}

export type SearchBlockStateType = {
    modality: Array<CheckboxesType>;
    institutions: Array<CheckboxesType>;
    date: DateType;
    fields: Array<FieldsType>;
    csrf: string;
}