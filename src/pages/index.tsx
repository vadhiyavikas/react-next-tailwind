import React from "react";
import RootLayout from "@/layouts";
import Landing from "../components/landing/index";

const Home = () => {
  return <RootLayout>{<Landing />}</RootLayout>;
};

export default Home;
