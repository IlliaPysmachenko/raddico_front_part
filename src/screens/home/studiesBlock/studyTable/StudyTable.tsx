// eslint-disable-next-line max-len
import { checkAllStudiesToggle, setSort, setToggleStudyChecked } from '@/src/screens/home/studiesBlock/slice/studiesSlice';
import Checkbox from '@/src/components/checkbox/Checkbox';
import React from 'react';
import Link from 'next/link';
import { Search, ZipFile } from '@/src/assets/icons';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import style from './StudyTable.module.scss';
// import { API_BASE_URL } from "@/config";

const StudyTable = () => {
  const {
    studies,
    studyTitles,
    sortConfig,
    checkAllStudies,
  } = useAppSelector((state) => state.study);
  const dispatch = useAppDispatch();
  const requestSortHandler = (sortingBy: string) => {
    let direction;
    if (sortConfig.direction === 'ASC') {
      direction = 'DESC';
    } else {
      direction = 'ASC';
    }
    // @ts-ignore
    dispatch(setSort([sortingBy, direction]));
  };

  const studiesTableHeader = studyTitles.map((item) => {
    const toggleCheckboxHandler = () => {
      // @ts-ignore
      dispatch(checkAllStudiesToggle(!checkAllStudies));
    };
    return (
      <div key={item.id} className={style.study_header}>
        {item.id === 'study_action'
          // eslint-disable-next-line max-len
          ? <Checkbox id={item.id} name="" isChecked={checkAllStudies} toggleCheckboxHandler={toggleCheckboxHandler} title="" /> : (
            <button
              type="button"
              onClick={() => requestSortHandler(item.id)}
              className={
                `${style.sortingBtn} 
                 ${sortConfig.key === item.id ? `${style.activeSorting}` : ''} 
                 ${(sortConfig.key === item.id && sortConfig.direction === 'ASC') ? `${style.ascending}` : ''}
                 ${(sortConfig.key === item.id && sortConfig.direction === 'DESC') ? `${style.descending}` : ''}`
              }
            >
              {item.title}
            </button>
          )}
      </div>
    );
  });

  const studiesTable = studies && studies.map((item) => {
    const toggleCheckboxHandler = (id: String) => {
      // @ts-ignore
      dispatch(setToggleStudyChecked({ id, isChecked: item.isChecked }));
    };
    return (
      <React.Fragment key={item.study_iuid}>
        <div className={style.grid_item}>
          <Link
            href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/zip/dicom/${item.study_iuid}`}
            // target="_blank"
            title="Download exam"
            className={style.disabled}
          >
            <ZipFile
              className="iconCommonStyle"
            />
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/viewer/oviyam2/${item.study_iuid}`}
            target="_blank"
            title="View exam"
          >
            <Search
              className="iconCommonStyle"
            />
          </Link>
        </div>
        <div className={style.grid_item}>{item.patient_id}</div>
        <div className={style.grid_item}>{item.patient_name}</div>
        <div className={style.grid_item}>{item.patient_dob}</div>
        <div className={style.grid_item}>{item.study_date}</div>
        <div className={style.grid_item}>{item.modalities}</div>
        <div className={style.grid_item}>{item.referral}</div>
        <div className={style.grid_item}>{item.images_count}</div>
        <div className={`${style.grid_item} ${style.centered}`}>
          {/* eslint-disable-next-line max-len */}
          <Checkbox id={item.study_iuid} name="" isChecked={item.isChecked} toggleCheckboxHandler={toggleCheckboxHandler} title="" />
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className={`${style.studyTable_container}`}>
      {studiesTableHeader}
      {studiesTable}
    </div>
  );
};

export default StudyTable;
