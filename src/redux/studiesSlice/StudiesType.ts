export type StudiesType = {
    study_iuid: string;
    patient_id: string;
    patient_name:string;
    patient_dob : string;
    study_date : string;
    modalities : string;
    referral : string;
    images_count : string;
}

type StudyTitlesType = {
    id: string;
    title: string;
}

export type StudiesArrayType = {
    studies: Array<StudiesType>;
    totalStudiesCount: number;
    totalImagesCount: number;
    studyTitles: Array<StudyTitlesType>
}