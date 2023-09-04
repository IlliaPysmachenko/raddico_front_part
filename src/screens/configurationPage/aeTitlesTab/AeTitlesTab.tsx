import React, { useEffect, useState } from 'react';
import { DeleteIcon, NotificationIcon, RewriteIcon } from '@/src/assets/icons';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import Button from '@/src/components/button/Button';
import { changeAeTitle } from '@/src/screens/configurationPage/aeTitlesTab/slice/aeTitlesSlice';
import Modal from '@/src/components/modal/ModalComponent';
import FormComponent from '@/src/components/form/FormComponent';
import {
  createAeTitle,
  deleteTitle, getAeTitles, updateTitle,
  verifyTitle,
} from '@/src/screens/configurationPage/aeTitlesTab/slice/thunkCreators';
import style from './AeTitlesTab.module.scss';

const AeTitlesTab = () => {
  const aeTitlesArr = useAppSelector((state) => state.aeTitles.aeTitlesArray);
  const dispatch = useAppDispatch();

  const [addNewTitleModalVisible, setAddNewTitleModalVisible] = useState(false);
  const [modalVisibleArray, setModalVisibleArray] = useState(new Array(aeTitlesArr?.length).fill(false));

  useEffect(() => {
    dispatch(getAeTitles());
  }, []);

  const aeTitles = aeTitlesArr?.map((item, index) => {
    const deleteTitleHandler = () => {
      // eslint-disable-next-line no-restricted-globals
      const shouldDelete = confirm(`Are you sure you want to delete ${item.ae_title}`);
      if (shouldDelete) {
        dispatch(deleteTitle(item.ae_title));
      }
    };
    const submitFormHandler = (data: any) => {
      console.log(data);
      dispatch(updateTitle(data));
    };

    const toggleOpenModalHandler = (ind: number, isOpen: boolean) => {
      const newModalVisibleArray = [...modalVisibleArray];
      newModalVisibleArray[ind] = isOpen;
      setModalVisibleArray(newModalVisibleArray);
    };

    const verifyTitleHandler = () => {
      dispatch(verifyTitle(item.ae_title));
    };

    return (
      <div className={style.aeTitle_container} key={item.ae_title}>
        <span>
          {item.ae_title}
        </span>
        <div className={style.iconsBlock}>
          {/* eslint-disable-next-line max-len */}
          <div className={style.rewriteIcon} title="Change AE Title" onClick={() => { toggleOpenModalHandler(index, true); }}>
            <RewriteIcon />
          </div>
          <div className={style.revriteIcon} title="Verify AE Title" onClick={verifyTitleHandler}>
            <NotificationIcon />
          </div>
          <div className={style.deleteIcon} title="Delete AE Title" onClick={deleteTitleHandler}>
            <DeleteIcon />
          </div>
        </div>
        { modalVisibleArray[index] && (
          <Modal key={item.ae_title} toggleOpenModalHandler={(isOpen) => toggleOpenModalHandler(index, isOpen)}>
            {/* eslint-disable-next-line max-len */}
            <FormComponent key={item.ae_title} id={item.ae_title} item={item} handler={submitFormHandler} buttonText="Save changes" />
          </Modal>
        ) }
      </div>
    );
  });

  const aeTitleModalVisible = () => {
    setAddNewTitleModalVisible(true);
  };
  const closeAddNewTitleModal = (isOpen: boolean) => {
    setAddNewTitleModalVisible(isOpen);
  };

  const aeTitleNewFields = {
    ae_title: '',
    description: '',
    host: '',
    port: '',
  };
  const addNewAeTitleHandler = (data : any) => {
    console.log(data);
    dispatch(createAeTitle(data));
  };

  return (
    <div className={style.container}>
      {aeTitles}
      <div>
        <Button title="Add application entity" handler={aeTitleModalVisible} type="button" />
      </div>
      {
        addNewTitleModalVisible && (
        <Modal toggleOpenModalHandler={(isOpen) => {
          closeAddNewTitleModal(isOpen);
        }}
        >
          <FormComponent item={aeTitleNewFields} handler={addNewAeTitleHandler} buttonText="Add new entity" />
        </Modal>
        )
      }
    </div>
  );
};

export default AeTitlesTab;
