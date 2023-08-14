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
  // @ts-ignore
  // const { items, requestSort, sortConfig } = useSortableData(studies);

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

  // const getClassNamesFor = (name: string) => {
  //   if (!sortConfig) {
  //     return;
  //   }
  //   // eslint-disable-next-line consistent-return
  //   return sortConfig.key === name ? sortConfig.direction : undefined;
  // };

  const requestSortHandler = (sortingBy: string) => {
    let direction;
    if (sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else {
      direction = 'ascending';
    }
    dispatch(requestSort([sortingBy, direction]));
  };

  return (
    <>
      {additionalInfo}

      {studies && (
        <div className={`${style.study_container}`}>
          {studyTitles.map((item) => (
            <div key={item.id} className={style.study_header}>
              <button
                type="button"
                onClick={() => requestSortHandler(item.id)}
                className=""
              >
                {item.title}
              </button>
            </div>
          ))}
          {studiesTable}

        </div>
      )}
    </>
  );
}

export default StudiesBlock;

// export const useSortableData = (items, config = null) => {
//   const [sortConfig, setSortConfig] = React.useState(config);
//
//   const sortedItems = React.useMemo(() => {
//     const sortableItems = [...items];
//     if (sortConfig !== null) {
//       sortableItems.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return sortableItems;
//   }, [items, sortConfig]);
//
//   const requestSort = (key: any) => {
//     let direction = 'ascending';
//     if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });
//   };
//
//   return { items: sortedItems, requestSort, sortConfig };
// };

// const ProductTable = (props) => {
//   const { items, requestSort, sortConfig } = useSortableData(props.products);
//   const getClassNamesFor = (name) => {
//     if (!sortConfig) {
//       return;
//     }
//     return sortConfig.key === name ? sortConfig.direction : undefined;
//   };
// };
