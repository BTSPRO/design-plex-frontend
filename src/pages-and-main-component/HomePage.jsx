import React from "react";
import HomeTypo from "../component/home-all-components/HomeTypo";
import HomeRecentWork from "../component/home-all-components/HomeRecentWork";
import HomePatners from "../component/home-all-components/HomePatners";
import HomeOurServices from "../component/home-all-components/HomeOurServices";
import HomePortfolio from "../component/home-all-components/HomePortfolio";
import HomeClient from "../component/home-all-components/HomeClient";
import HomeFAQ from "../component/home-all-components/HomeFAQ";
import HomeForm from "../component/home-all-components/HomeForm";
import HomeUpdate from "../component/home-all-components/HomeUpdate";
import NavBar from "./NavBar";
import HomeImages from "../component/home-all-components/HomeImages";
const HomePage = () => {
  return (
    <>
      <NavBar />
      <HomeTypo />
      <HomeImages />
      <HomeRecentWork />
      <HomePatners />
      <HomeOurServices />
      <HomePortfolio />
      <HomeClient />
      <HomeFAQ />
      <HomeForm />
      <HomeUpdate />
    </>
  );
};

export default HomePage;
