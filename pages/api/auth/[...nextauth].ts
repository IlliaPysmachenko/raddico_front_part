'use client';

import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export const authOptions = {
  providers: [
    KeycloakProvider({
      id: 'keycloak',
      clientId: `${process.env.KEYCLOAK_ID}`,
      clientSecret: `${process.env.KEYCLOAK_SECRET}`,
      issuer: `${process.env.KEYCLOAK_ISSUER}`,
      wellKnown: 'https://192.168.2.237:8843/realms/dcm4che/.well-known/openid-configuration',
      authorization: `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/auth`,
      token: `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/token`,
    }),
  ],
  debug: true,
};

export default NextAuth(authOptions);
