import { checkAllStudiesToggle, requestSort, setToggleStudyChecked } from '@/src/redux/studiesSlice/studiesSlice';
import Checkbox from '@/src/components/checkbox/Checkbox';
import React from 'react';
import Link from 'next/link';
import { Search, ZipFile } from '@/src/assets/icons';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import style from './StudyTable.module.scss';

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
    dispatch(requestSort([sortingBy, direction]));
  };

  const studiesTableHeader = studyTitles.map((item) => {
    const toggleCheckboxHandler = () => {
      dispatch(checkAllStudiesToggle(!checkAllStudies));
    };
    return (
      <div key={item.id} className={style.study_header}>
        {item.id === 'study_action'
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
      dispatch(setToggleStudyChecked({ id, isChecked: item.isChecked }));
    };
    return (
      <React.Fragment key={item.study_iuid}>
        <div className={style.grid_item}>
          <Link
            href={`http://192.168.2.237:8888/api/zip/dicom/${item.study_iuid}`}
            target="_blank"
            title="Download exam"
            className={style.disabled}
          >
            <ZipFile
              className="iconCommonStyle"
            />
          </Link>
          <Link
            href={`http://192.168.2.237:8888/api/viewer/oviyam2/${item.study_iuid}`}
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
