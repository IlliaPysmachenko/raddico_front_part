import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthStatus() {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <div> Loading...</div>;
  }

  if (session) {
    return (
      <div>
        Logged in as { session.user?.name } <span>{session.user?.email}</span> {' '}
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
