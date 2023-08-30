import { ZipFile } from '@/src/assets/icons';
import WithSelect from '@/src/hoc/withSelect';
import { setDestinationServer } from '@/src/screens/home/studiesBlock/slice/studiesSlice';
import Button from '@/src/components/button/Button';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import {
  requestZipStudy,
  sendStudyActions,
} from '@/src/screens/home/studiesBlock/slice/thunkCreators';
import style from './AdditionalInfo.module.scss';

const AdditionalInfo = () => {
  const {
    selectedStudies,
    totalStudiesCount,
    totalImagesCount,
    destinationServer,
  } = useAppSelector((state) => state.study);
  const dispatch = useAppDispatch();
  const sendExamsHandler = () => {
    const createPayload = () => ({
      // eslint-disable-next-line max-len
      send_to: destinationServer.selectedOption,
      selected_studies: selectedStudies,
    });
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
};

export default AdditionalInfo;
