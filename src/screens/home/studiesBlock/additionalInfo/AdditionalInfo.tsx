import { ZipFile } from '@/src/assets/icons';
import Button from '@/src/components/button/Button';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { sendStudyActions } from '@/src/screens/home/studiesBlock/slice/thunkCreators';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';
import style from './AdditionalInfo.module.scss';

const AdditionalInfo = () => {
  const {
    selectedStudies,
    totalStudiesCount,
    totalImagesCount,
  } = useAppSelector((state) => state.study);
  const aeTitles = useAppSelector((state) => state.aeTitles.aeTitlesArray);
  const dispatch = useAppDispatch();
  const [sendToTitle, setSendToTitle] = useState('');

  const aeTitlesOptionsArr: any = [{ value: '', label: 'Select exporter' }];
  // eslint-disable-next-line array-callback-return
  aeTitles.map((item) => {
    aeTitlesOptionsArr.push({ label: item.ae_title, value: item.ae_title });
  });
  const selectTitleHandler = (data: { value: string; label: string; }) => {
    setSendToTitle(data.value);
  };
  const sendExamsHandler = () => {
    const createPayload = () => {
      const studies: Array<string> = [];
      selectedStudies.forEach((item) => studies.push(item.study_iuid));
      return {
        send_to: sendToTitle,
        selected_studies: studies,
      };
    };
    dispatch(sendStudyActions(createPayload()));
  };
  const requestZipStudyHandler = async () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of selectedStudies) {
      const link = `http://192.168.2.237:8888/api/zip/dicom/${item.study_iuid}`;
      // eslint-disable-next-line no-await-in-loop
      const response = await fetch(link);
      // eslint-disable-next-line no-await-in-loop
      const blob = await response.blob();

      // Создайте временный элемент <a> для скачивания
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = `${item.patient_id}_${item.patient_name}_${item.study_iuid}.zip`; // Задайте имя файла для скачивания
      anchor.style.display = 'none';

      // Добавьте элемент на страницу
      document.body.appendChild(anchor);

      // Имитируйте клик для скачивания файла
      anchor.click();

      // Удалите элемент после скачивания
      document.body.removeChild(anchor);
    }
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
          <Select
            unstyled
            isSearchable={false}
            classNamePrefix="react-select"
            options={aeTitlesOptionsArr}
            defaultValue={aeTitlesOptionsArr[0]}
            // @ts-ignore
            onChange={selectTitleHandler}
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
