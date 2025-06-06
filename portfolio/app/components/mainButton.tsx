import React from "react";

type props = { btnTitle: String; btnImg?: String };

const MainButton = ({ btnTitle, btnImg }: props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={`/${btnImg}Icon.svg`} alt="" />
      <h3>{btnTitle}</h3>
    </div>
  );
};

export default MainButton;
