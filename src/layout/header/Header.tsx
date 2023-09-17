'use client';

import React from 'react';
import Nav from '@/src/layout/header/nav/Nav';
import style from './Header.module.scss';

function Header() {
  return (
    <>
      <div className={style.versionBlock}>
        <span><strong>RRPL Light Front:</strong> [<strong>v1.0.0</strong>: 09.15.2023]</span>
        <span><strong>RRPL Light Back:</strong> [<strong>v1.0.0</strong>: 09.15.2023]</span>
      </div>
      <Nav />
    </>
  );
}

export default Header;
