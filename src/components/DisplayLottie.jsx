import React from "react";
import Lottie from "react-lottie";

export default function DisplayLottie(props) {
  const animationData = props.animationData;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div onClick="null">
      <Lottie
        options={defaultOptions}
        height={props.height}
        width={props.width}
      />
    </div>
  );
}
