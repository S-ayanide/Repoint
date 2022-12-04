import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="layout">
      <Head>
        <title>Repoint</title>
      </Head>
      <header>
        <div className="dev">This is only for development purpose, please donot use your original card details</div>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
