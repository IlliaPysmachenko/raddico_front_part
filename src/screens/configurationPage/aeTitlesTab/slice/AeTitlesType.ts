export type AeTitleFieldType = {
  name: string;
  type: string;
  isRequired: boolean;
  isDisabled: boolean;
  value: string;
};

export type AeTitlesType = {
  id: string;
  fields: Array<AeTitleFieldType>;
};

export type AeTitleSliceType = {
  aeTitlesArray: Array<AeTitlesType>,
};
