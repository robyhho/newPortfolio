import React from "react";

const MainButton = ({ btnTitle, btnImg }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={`/${btnImg}Icon.svg`} alt="" />
      <h3>{btnTitle}</h3>
    </div>
  );
};

export default MainButton;
