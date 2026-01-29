import React from "react";
import Button from "../Common/button";

const PageBanner = ({ img, divClassName, imgClassName }) => {
  return (
    <section
      className={`bg-gray-100 mt-8 flex  ${divClassName} lg:h-96 border-0 rounded-3xl overflow-hidden `}
    >
      <div
        className={`space-y-7 text-center flex flex-col flex-1 lg:justify-center items-center py-14 px-7`}
      >
        <p className="text-4xl lg:text-5xl">Turn Up The Glow</p>
        <p className="text-gray-500 text-sm  lg:text-lg">
          Made with 100% natural extracts and exfoliants to give your skin all
          of nature's goodness.
        </p>
        <Button>
          <a href="#products">Shop Now</a>
        </Button>
      </div>
      <img src={img} className={`border-0  ${imgClassName} flex-1`} />
    </section>
  );
};

export default PageBanner;
