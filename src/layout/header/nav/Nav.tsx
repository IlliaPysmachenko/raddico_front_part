'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ColorTheme from '@/src/components/colorTheme/ColorTheme';
import Logout from '@/src/components/logout/Logout';
import style from './Nav.module.scss';

function Nav(): React.JSX.Element {
  const { pathname } = useRouter();
  const navArr = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Configuration',
      path: '/configuration',
    },
  ];
  return (
    <div className={style.navContainer}>
      <nav className={style.na}>
        <ul className={style.navRow}>
          {navArr.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <Link
                href={item.path}
                className={`${pathname === item.path ? `${style.activeLink}` : ''}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={style.logoutBlock}>

      </div>
      {/* <div className={style.colorTheme_block}> */}
      <ColorTheme />
      {/* </div> */}
    </div>
  );
}

export default Nav;
// test commit
