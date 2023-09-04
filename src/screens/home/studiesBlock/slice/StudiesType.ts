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

type StudyTitlesType = {
  id: string;
  title: string;
};

export type ZipType = {
  id: string;
  name: string;
  prepared: string;
};

export type SortConfigType = {
  direction: string | null;
  key: string;
};

export type StudiesArrayType = {
  studies: Array<StudiesType> | null;
  selectedStudies: Array<string>;
  totalStudiesCount: number;
  totalImagesCount: number;
  studyTitles: Array<StudyTitlesType>;
  checkAllStudies: boolean;
  sortConfig: SortConfigType;
  zipItems: Array<ZipType>;
};
