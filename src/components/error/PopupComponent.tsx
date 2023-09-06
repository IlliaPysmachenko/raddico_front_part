'use client';

import React, { useEffect } from 'react';
import { closeMessage } from '@/src/redux/loading/loading';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import style from './PopupComponent.module.scss';

function PopupComponent() {
  const dispatch = useAppDispatch();
  const serverMessage = useAppSelector((state) => state.loading.serverMessage);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (serverMessage.isShoved) {
      const timeout = setTimeout(() => {
        dispatch(closeMessage());
      }, 6000);

      return () => clearTimeout(timeout);
    }
  }, [serverMessage.isShoved, dispatch]);
  return (
    <div className={`${style.container} ${style[serverMessage.type]}`}>

      <div className={style.block}>
        <h3 className={style.title}>{serverMessage.type}</h3>

        <p className={style.messageBody}>{serverMessage.messageBody}</p>
      </div>

    </div>
  );
}

export default PopupComponent;
