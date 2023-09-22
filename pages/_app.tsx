import React from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/src/redux/store';
import Layout from '@/src/layout/Layout';
import SessionProviderWrapper from '@/utils/sessionPoviderWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProviderWrapper>
      <Provider store={store}>
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProviderWrapper>
  );
}
