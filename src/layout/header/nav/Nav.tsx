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
    // {
    //     name: 'Uploader',
    //     path: '/uploader',
    // },
    // {
    //     name: 'Report & Analytics',
    //     path: '/report-analytics',
    // },
    // {
    //     name: 'Marketing',
    //     path: '/marketing',
    // },
    // {
    //     name: 'Faxes',
    //     path: '/faxes',
    // },
    // {
    //     name: 'Archive (2015-2021)',
    //     path: '/archive1',
    // },
    // {
    //     name: 'Archive (<2015)',
    //     path: '/archive2',
    // },
    // {
    //     name: 'Scheduler',
    //     path: '/scheduler',
    // },
    // {
    //     name: 'Equipment',
    //     path: '/equipment',
    // },
    // {
    //     name: 'Support',
    //     path: '/support',
    // },
    // {
    //     name: 'Docs',
    //     path: '/docs',
    // },
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
