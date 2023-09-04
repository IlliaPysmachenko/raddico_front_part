import { ZipFile } from '@/src/assets/icons';
import Button from '@/src/components/button/Button';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import {
  requestZipStudy,
  sendStudyActions,
} from '@/src/screens/home/studiesBlock/slice/thunkCreators';
import InputSelectItem from '@/src/components/inputSelectItem/InputSelectItem';
import style from './AdditionalInfo.module.scss';

const AdditionalInfo = () => {
  const {
    selectedStudies,
    totalStudiesCount,
    totalImagesCount,
  } = useAppSelector((state) => state.study);
  const aeTitles = useAppSelector((state) => state.aeTitles.aeTitlesArray);
  const dispatch = useAppDispatch();
  const [sendToTitle, setSendToTitle] = useState('')

  const aeTitlesOptionsArr: any = [];
  // eslint-disable-next-line array-callback-return
  aeTitles.map((item) => {
    aeTitlesOptionsArr.push({ id: item.ae_title, name: item.ae_title });
  });
  const selectTitleHandler = (e: any) => {
    setSendToTitle(e.target.value);
  };
  const sendExamsHandler = () => {
    const createPayload = () => ({
      send_to: sendToTitle,
      selected_studies: selectedStudies,
    });
    console.log(createPayload());
    dispatch(sendStudyActions(createPayload()));
  };

  const requestZipStudyHandler = () => {
    selectedStudies.forEach((item) => {
      const link = `http://192.168.2.237:8888/api/zip/dicom/${item}`;
      window.open(link, '_blank');
    });
    dispatch(requestZipStudy(selectedStudies));
  };

  return (
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
              className="iconCommonStyle"
              onClick={requestZipStudyHandler}
            />
          </div>
        </div>
        <div className={style.additionalInfo_select}>
          <InputSelectItem
            id="aeTitles"
            optionsArr={aeTitlesOptionsArr}
            selectValueHandler={selectTitleHandler}
          />
        </div>

        <div className={style.additionalInfo_btn}>
          <Button type="button" title="Send exams" handler={sendExamsHandler} />
        </div>

      </div>
    </div>
  );
};

export default AdditionalInfo;
