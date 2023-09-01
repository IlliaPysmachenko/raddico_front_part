import React, { FC, ReactNode } from 'react';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';
import style from './ModalComponent.module.scss';

export type ModalPropsType = {
  toggleOpenModalHandler: (isOpen: boolean) => void;
  children: ReactNode;
};

const Modal: FC<ModalPropsType> = ({ toggleOpenModalHandler, children }) => {
  return (
    <div className={style.modal_wrapper} onClick={() => { toggleOpenModalHandler(false); }}>
      <div className={style.modal_container} onClick={(event) => { event.stopPropagation(); }}>
        {children}
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

export default Modal;
