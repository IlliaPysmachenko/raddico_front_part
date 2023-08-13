'use client';

import React from 'react';
import style from './ErrorComponent.module.scss';

function ErrorComponent() {
  return (
    <div className={style.errorContainer}>

      <div className={style.errorBlock}>
        <h3 className={style.errorTitle}>Something went wrong...</h3>

        <p>Please try to reload the page</p>
      </div>

    </div>
  );
}

export default ErrorComponent;
