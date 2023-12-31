'use client';

import React from 'react';
import AdditionalInfo from '@/src/screens/home/studiesBlock/additionalInfo/AdditionalInfo';
import StudyTable from '@/src/screens/home/studiesBlock/studyTable/StudyTable';
// import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
// import { removeZip, setZipItems } from '@/src/screens/home/studiesBlock/slice/studiesSlice';
// import Link from 'next/link';
// import style from './StudiesBlock.module.scss';

function StudiesBlock() {
  // const { zipItems } = useAppSelector((state) => state.study);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (zipItems.length) {
  //     zipItems.forEach((item) => {
  //       const interval = setInterval(() => {
  //         dispatch(checkZipStatus(item.id));
  //       }, 2000);
  //
  //       return () => {
  //         clearInterval(interval);
  //       };
  //     });
  //   }
  // }, [zipItems]);

  // const zipDownload = zipItems && (
  //   // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  //   <div
  //     className={style.downloadStudy_container}
  //     onClick={() => {
  //       dispatch(setZipItems({ id: 'test4', name: 'Name', prepared: '100' }));
  //     }}
  //   >
  //     {zipItems.map((item) => {
  //       const removeZipHandler = (event: React.MouseEvent<HTMLDivElement>) => {
  //         event.stopPropagation();
  //         dispatch(removeZip(item.id));
  //       };
  //       const clickToDownloadHandler = (event:React.MouseEvent<HTMLAnchorElement>) => {
  //         if (+item.prepared !== 100) {
  //           event.preventDefault();
  //         }
  //       };
  //
  //       return (
  //         <div
  //           key={item.id}
  //           className={`${style.downloadStudy_itemContainer} ${(+item.prepared < 100)
  //             ? style.downloadStudy_disabled : style.downloadStudy_enabled}`}
  //         >
  //           <div className={style.downloadStudy_title}>
  //             <Link
  //               href="https://192.168.2.237/"
  //               onClick={(event) => { clickToDownloadHandler(event); }}
  //             >
  //               {item.name}
  //             </Link>
  //             {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
  //             jsx-a11y/no-static-element-interactions */}
  //             <div
  //               className={style.deleteZipStudy}
  //               title="Remove zip file"
  //               onClick={(event) => {
  //                 removeZipHandler(event);
  //               }}
  //             >
  //               X
  //             </div>
  //           </div>
  //           {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
  //             jsx-a11y/no-static-element-interactions */}
  //           <div>
  //             <meter
  //               className={style.progressBar}
  //               min="0"
  //               max="100"
  //               low={35}
  //               high={90}
  //               optimum={100}
  //               value={item.prepared}
  //             />
  //             {
  //               item.prepared
  //             }
  //             %
  //           </div>
  //         </div>
  //       );
  //     })}
  //
  //   </div>
  // );

  return (
    <>
      <AdditionalInfo />
      <StudyTable />
    </>
  );
}

export default StudiesBlock;
