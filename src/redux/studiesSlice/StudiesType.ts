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

export type StudiesArrayType = {
    studies: Array<StudiesType> | null;
    totalStudiesCount: number;
    totalImagesCount: number;
}