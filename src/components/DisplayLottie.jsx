import React, { Component } from "react";
import Lottie from "react-lottie";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <div onClick="null">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}
