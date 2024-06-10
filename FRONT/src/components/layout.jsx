import React from 'react';
import Footer from './footer';
import Header from './header';
import Login from '../pages/Auth/Login';



const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;