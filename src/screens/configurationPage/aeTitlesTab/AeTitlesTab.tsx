import React, { FC, useState } from 'react';
import InputField from '@/src/components/inputFieldItem/InputField';
import { DeleteIcon, RewriteIcon } from '@/src/assets/icons';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import Button from '@/src/components/button/Button';
import { deleteAeTitle } from '@/src/screens/configurationPage/aeTitlesTab/slice/aeTitlesSlice';
import style from './AeTitlesTab.module.scss';
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import { useForm } from "react-hook-form";

const AeTitlesTab = () => {
  const aeTitlesArr = useAppSelector((state) => state.aeTitles.aeTitlesArray);
  const dispatch = useAppDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  const aeTitles = aeTitlesArr.map((item) => {
    const deleteAeTitleHandler = () => {
      // eslint-disable-next-line no-restricted-globals
      const shouldDelete = confirm(`Are you sure you want to delete ${item.name}`);
      if (shouldDelete) {
        dispatch(deleteAeTitle(item.id));
      }
    };
    const toggleOpenModalHandler = (isOpen: boolean) => {
      setModalVisible(isOpen);
    };
    return (
      <div className={style.aeTitle_container} key={item.id}>
        <span>
          {item.name}
          {' '}
          -
          {' '}
          {item.description}
        </span>
        <div className={style.iconsBlock}>
          <div
            className={style.rewriteIcon}
            title="Change AE Title"
            onClick={() => {
              toggleOpenModalHandler(true);
            }}
          >
            <RewriteIcon />
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            className={style.deleteIcon}
            title="Delete AE Title"
            onClick={deleteAeTitleHandler}
          >
            <DeleteIcon />
          </div>
        </div>
        { modalVisible && <ModalForm toggleOpenModalHandler={toggleOpenModalHandler} /> }
      </div>
    );
  });

  const addNewAeTitleHandler = () => {

  };

  return (
    <div className={style.container}>
      {aeTitles}
      <div>
        <Button title="Add application entity" handler={addNewAeTitleHandler} />
      </div>
    </div>
  );
};

export default AeTitlesTab;

// <div className={style.container}>
//   <div className={style.titles_container}>
//     <h5 className={style.titles_title}>Add Application Entity:</h5>
//   </div>
//   <div className={style.content_container}>
//     <InputField id="aetitle" title="AE Title" value=""/>
//   </div>
// </div>
// <div className={style.container}>
//   <div className={style.titles_container}><h5 className={style.titles_title}>Modify Application Entity:</h5></div>
// </div>

export type ModalFormPropsType = {
  toggleOpenModalHandler: (isOpen: boolean) => void;
};

export const ModalForm: FC<ModalFormPropsType> = ({ toggleOpenModalHandler }) => {
  const { register, formState: { errors }, handleSubmit} = useForm({
    mode: 'onBlur',
  });
  const onFormSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <div className={style.form_wrapper}>
      <div className={style.form_container}>
        <div className={style.form_block}>
          <form onSubmit={handleSubmit(onFormSubmitHandler)}>
            <div className={style.inputField_container}>
              <input {...register('test', { value: 'tTEST', required: false })} />
            </div>
          </form>
        </div>
        <div
          className={style.closeModalIcon}
          title="Close"
          onClick={() => {
            toggleOpenModalHandler(false);
          }}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};
