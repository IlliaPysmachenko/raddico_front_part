'use client';

import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthStatus() {
  const { data: session, status } = useSession();
  console.log(session);
  if (status === 'loading') {
    return <div> Loading...</div>;
  }

  // useEffect(() => {
  //   if (session?.error === 'RefreshAccessTokenError') {
  //     signIn('keycloak', {
  //       callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/application`,
  //     }); // Force sign in to hopefully resolve error
  //   }
  // }, [session]);

  if (session) {
    return (
      <div>
        Logged in as <span>{session.user?.email}</span> {' '}
        <button onClick={() => signOut({ callbackUrl: '/' })}>
          Log out
        </button>
      </div>
    );
  }

  return (
    <div>
      Not logged in. {' '}
      <button onClick={() => signIn('keycloak')}>Login</button>
    </div>
  );
}
