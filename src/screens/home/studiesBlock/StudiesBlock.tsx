'use client';

import React, { useState } from 'react';
import AdditionalInfo from '@/src/screens/home/studiesBlock/additionalInfo/AdditionalInfo';
import StudyTable from '@/src/screens/home/studiesBlock/studyTable/StudyTable';
import style from './StudiesBlock.module.scss';

function StudiesBlock() {
  const [val, setVal] = useState(98);
  return (
    <>
      <AdditionalInfo />
      <div className={style.downloadStudy_container}>
        <div className={`${style.downloadStudy_itemContainer} ${(val < 100) ? style.downloadStudy_disabled : style.downloadStudy_enabled}`}>
          <div>Study title</div>
          <div onClick={() => {
            if (val >= 100) {
              setVal(0);
            } else {
              setVal(val + 1);
            }
          }}
          >
            <meter className={style.progressBar} min="0" max="100" low="35" high="90" optimum="100" value={val}></meter> {val}%
          </div>
        </div>
      </div>
      <StudyTable />
    </>
  );
}

export default StudiesBlock;
