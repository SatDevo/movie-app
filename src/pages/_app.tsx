import React from 'react';
import type {AppProps} from 'next/app';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '../../lib/queryClient';

import '../../styles/globals.css';
import Head from 'next/head';
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Movie App</title>
        <meta
          name="description"
          content="Discover and explore your favorite movies with our Movie App"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;