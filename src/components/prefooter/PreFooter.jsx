import React from "react";
import PageBanner from "../Common/PageBanner";
import { imagesObj } from "../../images";

const PreFooter = () => {
  return (
    <PageBanner
      img={imagesObj.bodyWash}
      divClassName={"flex-col-reverse lg:flex-row-reverse"}
      imgClassName={"rounded-t-3xl lg:rounded-t-none"}
    />
  );
};

export default PreFooter;
