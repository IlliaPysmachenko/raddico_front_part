import React, { useState } from 'react';
import { DeleteIcon, NotificationIcon, RewriteIcon } from '@/src/assets/icons';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import Button from '@/src/components/button/Button';
import {
  changeAeTitle,
  deleteAeTitle,
  setNewAeTitle
} from '@/src/screens/configurationPage/aeTitlesTab/slice/aeTitlesSlice';
import Modal from '@/src/components/modal/ModalComponent';
import FormComponent from '@/src/components/form/FormComponent';
import style from './AeTitlesTab.module.scss';

const AeTitlesTab = () => {
  const aeTitlesArr = useAppSelector((state) => state.aeTitles.aeTitlesArray);
  const dispatch = useAppDispatch();

  const [addNewTitleModalVisible, setAddNewTitleModalVisible] = useState(false);
  const [modalVisibleArray, setModalVisibleArray] = useState(new Array(aeTitlesArr.length).fill(false));

  const aeTitles = aeTitlesArr.map((item, index) => {
    const deleteAeTitleHandler = () => {
      // eslint-disable-next-line no-restricted-globals
      const shouldDelete = confirm(`Are you sure you want to delete ${item.id}`);
      if (shouldDelete) {
        dispatch(deleteAeTitle(item.id));
      }
    };
    const submitFormHandler = ({ id, data }: any) => {
      dispatch(changeAeTitle({ id, data }));
    };

    const toggleOpenModalHandler = (ind: number, isOpen: boolean) => {
      const newModalVisibleArray = [...modalVisibleArray];
      newModalVisibleArray[ind] = isOpen;
      setModalVisibleArray(newModalVisibleArray);
    };

    const getAeTitleName = item.fields.find((item) => item.name === 'Name');

    return (
      <div className={style.aeTitle_container} key={item.id}>
        <span>
          {getAeTitleName?.value}
        </span>
        <div className={style.iconsBlock}>
          <div
            className={style.rewriteIcon}
            title="Change AE Title"
            onClick={() => {
              toggleOpenModalHandler(index, true);
            }}
          >
            <RewriteIcon />
          </div>
          <div
            className={style.revriteIcon}
            title="Verify AE Title"
            onClick={undefined}
          >
            <NotificationIcon />
          </div>
          <div
            className={style.deleteIcon}
            title="Delete AE Title"
            onClick={deleteAeTitleHandler}
          >
            <DeleteIcon />
          </div>
        </div>
        { modalVisibleArray[index] && (
          <Modal key={item.id} toggleOpenModalHandler={(isOpen) => toggleOpenModalHandler(index, isOpen)}>
            <FormComponent key={item.id} id={item.id} fields={item.fields} handler={submitFormHandler} buttonText="Save changes" />
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

  const aeTitleNewFields = [
    {
      name: 'Name',
      type: 'text',
      isRequired: true,
      isDisabled: false,
      value: '',
    },
    {
      name: 'Description',
      type: 'text',
      isRequired: false,
      isDisabled: false,
      value: '',
    },
    {
      name: 'Host',
      type: 'text',
      isRequired: true,
      isDisabled: false,
      value: '',
    },
    {
      name: 'Port',
      type: 'number',
      isRequired: true,
      isDisabled: false,
      value: '',
    },
  ];
  const addNewAeTitleHandler = ({ data }: any) => {
    const aeTitleNew = {
      id: data['Name'],
      fields: [
        {
          name: 'Name',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          value: data['Name'],
        },
        {
          name: 'Description',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          value: data['Description'],
        },
        {
          name: 'Host',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          value: data['Host'],
        },
        {
          name: 'Port',
          type: 'number',
          isRequired: true,
          isDisabled: false,
          value: data.Port,
        },
      ],
    };

    dispatch(setNewAeTitle(aeTitleNew));
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
          <FormComponent fields={aeTitleNewFields} handler={addNewAeTitleHandler} buttonText="Add new entity" />
        </Modal>
        )
      }
    </div>
  );
};

export default AeTitlesTab;
