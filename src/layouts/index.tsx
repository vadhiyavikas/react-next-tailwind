import React from "react";
import '../app/globals.css';
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-8">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;