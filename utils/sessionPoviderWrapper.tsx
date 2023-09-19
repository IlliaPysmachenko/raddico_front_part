'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

function SessionProviderWrapper({ children }: any) {
  return (
    <SessionProvider basePath="https://192.168.2.237:8843/realms/rrpl_light/account">{children}</SessionProvider>
  );
}

export default SessionProviderWrapper;
