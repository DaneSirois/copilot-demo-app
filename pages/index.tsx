import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie lookup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>
    </div>
  );
};

export default Home;