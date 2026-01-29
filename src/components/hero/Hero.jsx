import React from "react";
import Button from "../Common/button";
import { imagesObj } from "../../images";
import PageBanner from "../Common/PageBanner";

const Hero = () => {
  return (
    <PageBanner
      img={imagesObj.grouped}
      divClassName={"flex-col lg:flex-row"}
      imgClassName={"rounded-b-3xlrounded-b-3xl lg:rounded-b-none"}
    />
  );
};

export default Hero;
