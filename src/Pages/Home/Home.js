import React from "react";
import Services from "../Service/Service";
import Banner from "./Banner/Banner";
import Review from "./Review/Review";
import Tabs from "./Tabs/Tabs";
import ReviewData from "./Review/ReviewData/ReviewData";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Tabs></Tabs>
      <Services></Services>
      
      <Review></Review>
      <ReviewData></ReviewData>
    </>
  );
};

export default Home;
