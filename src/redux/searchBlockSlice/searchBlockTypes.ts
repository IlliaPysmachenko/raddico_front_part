export type CheckboxesType = {
  id: string;
  name: string;
  isChecked: boolean;
};

type DateType = {
  dateFrom: string;
  dateTo: string;
  datePeriod: string;
};

type FieldsType = {
  id: string;
  title: string;
  value: string;
};

export type SearchBlockStateType = {
  modality: {
    id: string;
    checkboxArr: Array<CheckboxesType>;
    isAllChecked: boolean;
    modalityCount: number;
  };
  institutions: {
    id: string;
    checkboxArr: Array<CheckboxesType>;
    isAllChecked: boolean;
    institutionsCount: number;
  };
  date: DateType;
  fields: Array<FieldsType>;
  csrf: string;
};
