'use client';

import React from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { Search, ZipFile } from '@/src/assets/icons';
import {
  checkAllStudiesToggle,
  requestSort,
  sendStudyActions,
  setDestinationServer,
  setToggleStudyChecked,
} from '@/src/redux/studiesSlice/studiesSlice';
import Checkbox from '@/src/components/checkbox/Checkbox';
import WithSelect from '@/src/hoc/withSelect';
import Button from '@/src/components/button/Button';
import style from './StudiesBlock.module.scss';

function StudiesBlock() {
  const {
    studies,
    totalStudiesCount,
    totalImagesCount,
    studyTitles,
    sortConfig,
    destinationServer,
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

  const sendExamsHandler = () => {
    const createPayload = () => ({
      // eslint-disable-next-line max-len
      send_to: destinationServer.selectedOption,
      selected_studies: studies?.filter((item) => item.isChecked).map((item) => item.study_iuid),
    });
    dispatch(sendStudyActions(createPayload()));
  };

  const additionalInfo = studies && (
    <div className={style.additionalInfo_container}>
      <div className={style.additionalInfo}>
        {/* eslint-disable-next-line */}
        <span>Total studies count: {totalStudiesCount}; </span>
        {/* eslint-disable-next-line */}
        <span>Total images count: {totalImagesCount};</span>
      </div>
      <div className={style.additionalActions}>

        <div className={style.additionalInfo_icon}>
          <div
            title="Download selected exams"
          >
            <ZipFile
              className={style.icon}
            />
          </div>
        </div>

        <div className={style.additionalInfo_select}>
          <WithSelect
            id={destinationServer.id}
            name={destinationServer.name}
            optionsArr={destinationServer.optionsArr}
            action={setDestinationServer}
          />
        </div>

        <div className={style.additionalInfo_btn}>
          <Button title="Send exams" handler={sendExamsHandler} />
        </div>

      </div>
    </div>
  );

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
          >
            <ZipFile
              className={style.icon}
            />
          </Link>
          <Link
            href={`http://192.168.2.237:8888/api/viewer/oviyam2/${item.study_iuid}`}
            target="_blank"
            title="View exam"
          >
            <Search
              className={style.icon}
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

  return (
    <>
      {additionalInfo}

      {studies && (
        <div className={`${style.study_container}`}>
          {studiesTableHeader}
          {studiesTable}
        </div>
      )}
    </>
  );
}

export default StudiesBlock;
