import React from 'react';
import style from './Preloader.module.scss';

function Preloader() {
  return (
    <div className={style.loaderBlock}>
      <div className={style.ldsRoller}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Preloader;
