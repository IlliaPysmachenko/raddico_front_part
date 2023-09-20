import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';
import jwt_decode from 'jwt-decode';
import { encrypt } from '@/utils/encryption';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID!,
      clientSecret: process.env.KEYCLOAK_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      const nowTimeStamp = Math.floor(Date.now() / 1000);
      console.log(token);
      // Persist the OAuth access_token to the token right after signing
      if (account) {
        console.log(account);
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
      console.log('Token has expired. Will refresh...');
      return token;
    },
    async session({ session, token }) {
      console.log(session);
      // Send properties to the client, like an access_token from a provider.
      session.access_token = encrypt(token.access_token);
      session.id_token = encrypt(token.id_token);
      session.roles = token.decoded.realm_access.roles;
      return session;
    },
  },
  secret: 'atr5-gt65-9jet',
});
