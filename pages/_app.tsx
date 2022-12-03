import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Layout } from '../components';
import { StateContextProvider } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContextProvider>
  );
}
