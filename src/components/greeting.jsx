import React, { Component } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import { illustration, greeting } from "../source";
import DisplayLottie from "./DisplayLottie";
import landingPerson from "../assets/lottie/landingPerson";

export default class Greeting extends Component {
  render() {
    return (
      <div>
        <Fade bottom duration={1000} distance="40px">
          <div>
            <div
              className="max-w-4xl max-h-4xl p-4 mx-auto md:my-20 md:p-8 py-8"
              id="greeting"
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div>
                    <span className="text-5xl font-serif text-bold text-black tracking-tight">
                      {greeting.title}
                      <span className="transition duration-1800 ease-in-out inline-block mx-2">
                        {emoji("👋")}
                      </span>
                    </span>
                    <p className="flex flex-wrap">{greeting.subTitle}</p>
                  </div>
                </div>
                <div className="invisible md:visible max-w-sm max-h-sm">
                  <DisplayLottie animationData={landingPerson} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
