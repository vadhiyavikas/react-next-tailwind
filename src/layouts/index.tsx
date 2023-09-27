import React from "react";
import Heder from "./Header";
import Footer from "./Footer"

export default function Layout({children}) {
  return (
    <div>
      <Heder />
      {children}
      <Footer/>
    </div>
  );
};
