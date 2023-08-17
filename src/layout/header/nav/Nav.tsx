'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ColorTheme from '@/src/components/colorTheme/ColorTheme';
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
    <div>
      <nav>
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

        <ColorTheme />
      </nav>
    </div>
  );
}

export default Nav;
// test commit
