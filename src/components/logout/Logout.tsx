'use client';

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import style from './Logout.module.scss';

export default function Logout() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div> Loading...</div>;
  }

  return (
    <button type="button" className={style.logoutBtn} onClick={() => signOut({ callbackUrl: '/' })}>
      Log out of
      {
      session?.user?.name
      }
    </button>
  );
}
