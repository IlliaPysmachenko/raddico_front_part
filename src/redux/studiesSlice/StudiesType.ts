import { OptionsArrType } from '@/src/components/inputSelectItem/InputSelectItem';

export type StudiesType = {
  study_iuid: string;
  patient_id: string;
  patient_name: string;
  patient_dob: string;
  study_date: string;
  modalities: string;
  referral: string;
  images_count: string;
  isChecked: boolean;
};

export type DestinationServerType = {
  id: string;
  name: string;
  optionsArr: Array<OptionsArrType>;
};

type StudyTitlesType = {
  id: string;
  title: string;
};

export type SortConfigType = {
  direction: string | null;
  key: string;
};

export type StudiesArrayType = {
  studies: Array<StudiesType> | null;
  totalStudiesCount: number;
  totalImagesCount: number;
  studyTitles: Array<StudyTitlesType>;
  destinationServer: DestinationServerType;
  sortConfig: SortConfigType;
};
