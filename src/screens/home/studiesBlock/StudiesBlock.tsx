'use client';

import React from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { Search, ZipFile } from '@/src/assets/icons';
import { requestSort } from '@/src/redux/studiesSlice/studiesSlice';
import style from './StudiesBlock.module.scss';

function StudiesBlock() {
  const {
    studies,
    totalStudiesCount,
    totalImagesCount,
    studyTitles,
    sortConfig,
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

  const additionalInfo = studies && (
    <div className={style.additionalInfo}>
      {/* eslint-disable-next-line */}
      <span>Total studies count: {totalStudiesCount}; </span>
      {/* eslint-disable-next-line */}
      <span>Total images count: {totalImagesCount};</span>
    </div>
  );
  const studiesTable = studies && studies.map((item) => (
    <React.Fragment key={item.study_iuid}>
      <div className={style.grid_item}>
        <Link
          href={`http://192.168.2.237:8888/api/zip/dicom/${item.study_iuid || ''}`}
          target="_blank"
        >
          <ZipFile
            className={style.zipIcon}
          />
        </Link>
        <Link
          href={`http://192.168.2.237:8888/api/viewer/oviyam2/${item.study_iuid || ''}`}
          target="_blank"
        >
          <Search
            className={style.zipIcon}
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
      {/* <div className={style.grid_item}>{item.symptoms}</div> */}
      {/* <div className={style.grid_item}>{item.notes}</div> */}
      {/* <div className={style.grid_item}>{item.lm}</div> */}
      {/* <div className={style.grid_item}>{item.imgCenter}</div> */}
      {/* <div className={style.grid_item}>{item.value}</div> */}
      {/* <div className={style.grid_item}>{item.studyDate}</div> */}
      {/* <div className={style.grid_item}>{item.referrer}</div> */}
      {/* <div className={style.grid_item}>{item.assignment}</div> */}
      {/* <div className={style.grid_item}>{item.status}</div> */}
      {/* /!*<div className={style.grid_item}>{item.action}</div>*!/ */}
      {/* <div className={style.grid_item}>{item.proofreading}</div> */}
      {/* eslint-disable-next-line max-len */}
      {/* <div className={style.grid_item}><Checkbox id={item.id} name={''} isChecked={item.checked}/></div> */}
    </React.Fragment>
  ));
  const studiesTableHeader = studyTitles.map((item) => (
    <div key={item.id} className={style.study_header}>
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
    </div>
  ));

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
