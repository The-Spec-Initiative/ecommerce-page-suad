import React from "react";

const ImageContainer = ({ obj, className }) => {
  return (
    <div
      className={`${obj.color}  ${className} w-full h-48 flex items-center py-4 px-4 border-0 rounded-3xl aspect-square `}
    >
      <img src={obj.img} className={` object-contain h-full w-full`} />
    </div>
  );
};

export default ImageContainer;
