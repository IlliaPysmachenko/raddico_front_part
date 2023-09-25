'use client';

import NextAuth, { type AuthOptions } from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';
import jwt_decode from 'jwt-decode';
import { encrypt } from '@/utils/encryption';
import { JWT } from 'next-auth/jwt';
import axios, { AxiosError } from 'axios';
import { signIn } from "next-auth/react";

async function doFinalSignoutHandshake(jwt: JWT) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id_token } = jwt;

  try {
    // Add the id_token_hint to the query string
    const params = new URLSearchParams();
    params.append('id_token_hint', `${id_token}`);
    const { status, statusText } = await axios.get(`${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/logout?${params.toString()}`);

    // The response body should contain a confirmation that the user has been logged out
    console.log('Completed post-logout handshake', status, statusText);
  } catch (e: any) {
    console.error('Unable to perform post-logout handshake', (e as AxiosError)?.code || e);
  }
}
export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      id: 'keycloak',
      clientId: `${process.env.KEYCLOAK_ID}`,
      clientSecret: `${process.env.KEYCLOAK_SECRET}`,
      issuer: `${process.env.KEYCLOAK_ISSUER}`,
    }),
  ],

  callbacks: {
    async jwt({ token, account }: any) {
      const nowTimeStamp = Math.floor(Date.now() / 1000);
      if (account) {
        token.decoded = jwt_decode(account.access_token);
        token.access_token = account.access_token;
        token.id_token = account.id_token;
        token.expires_at = account.expires_at;
        token.refresh_token = account.refresh_token;
        return token;
      }
      if (nowTimeStamp < token.expires_at) {
        return token;
      }
      signIn('keycloak');
      return token;
    },

    async session({ session, token }: any) {
      session.access_token = encrypt(token.access_token);
      session.id_token = encrypt(token.id_token);
      session.roles = token.decoded.realm_access.roles;
      return session;
    },
  },

  events: {
    signOut: ({ token }) => doFinalSignoutHandshake(token),
  },
};

export default NextAuth(authOptions);
